"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useId,
  forwardRef,
  useImperativeHandle,
} from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/utils";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface CustomSelectProps {
  id?: string;
  name?: string;
  value?: string;
  options: (string | SelectOption)[];
  placeholder?: string;
  label?: string;
  labelClassName?: string;
  error?: string;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  triggerClassName?: string;
  menuClassName?: string;
  optionClassName?: string;
  onChange?: (value: string) => void;
  includePlaceholderOption?: boolean;
  autoFlip?: boolean;
  "aria-label"?: string;
}

export interface CustomSelectHandle {
  focus: () => void;
  open: () => void;
  close: () => void;
}

export const CustomSelect = forwardRef<CustomSelectHandle, CustomSelectProps>(
  (
    {
      id,
      name,
      value = "",
      options,
      placeholder,
      label,
      labelClassName,
      error,
      disabled = false,
      required = false,
      className,
      triggerClassName,
      menuClassName,
      optionClassName,
      onChange,
      includePlaceholderOption = true,
      autoFlip = true,
      "aria-label": ariaLabelProp,
    },
    ref
  ) => {
    const generatedId = useId();
    const selectId = id || generatedId;
    const listboxId = `${selectId}-listbox`;

    const [isOpen, setIsOpen] = useState(false);
    const [placement, setPlacement] = useState<"top" | "bottom">("bottom");
    const [focusedIndex, setFocusedIndex] = useState<number>(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLDivElement>(null);

    // Normalize options list
    const normalizedOptions = useMemo<SelectOption[]>(() => {
      const parsed: SelectOption[] = options.map((opt) =>
        typeof opt === "string" ? { value: opt, label: opt } : opt
      );

      const hasEmpty = parsed.some((opt) => opt.value === "");
      if (placeholder && includePlaceholderOption && !hasEmpty) {
        return [{ value: "", label: placeholder }, ...parsed];
      }

      return parsed;
    }, [options, placeholder, includePlaceholderOption]);

    // Current selected option
    const selectedOption = useMemo(() => {
      return normalizedOptions.find((opt) => opt.value === value);
    }, [normalizedOptions, value]);

    const isPlaceholder = !value || (selectedOption && selectedOption.value === "");
    const displayLabel =
      selectedOption && selectedOption.value !== ""
        ? selectedOption.label
        : placeholder || "Select an option";

    // Expose imperative methods to ref
    useImperativeHandle(ref, () => ({
      focus: () => triggerRef.current?.focus(),
      open: () => {
        if (!disabled) setIsOpen(true);
      },
      close: () => setIsOpen(false),
    }));

    // Detect vertical placement (flip if not enough space below)
    useEffect(() => {
      if (isOpen && autoFlip && triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const spaceBelow = window.innerHeight - rect.bottom;
        const spaceAbove = rect.top;

        if (spaceBelow < 240 && spaceAbove > 240) {
          setPlacement("top");
        } else {
          setPlacement("bottom");
        }
      }
    }, [isOpen, autoFlip]);

    // Scroll focused option into view in listbox
    useEffect(() => {
      if (isOpen && focusedIndex >= 0 && listRef.current) {
        const optionEl = listRef.current.children[focusedIndex] as HTMLElement;
        if (optionEl && optionEl.scrollIntoView) {
          optionEl.scrollIntoView({ block: "nearest" });
        }
      }
    }, [focusedIndex, isOpen]);

    // Set initial focused index when opening
    useEffect(() => {
      if (isOpen) {
        const selectedIdx = normalizedOptions.findIndex((opt) => opt.value === value);
        setFocusedIndex(selectedIdx >= 0 ? selectedIdx : 0);
      } else {
        setFocusedIndex(-1);
      }
    }, [isOpen, normalizedOptions, value]);

    // Handle outside click & touch
    useEffect(() => {
      if (!isOpen) return;

      const handleClickOutside = (e: MouseEvent | TouchEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setIsOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);

      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("touchstart", handleClickOutside);
      };
    }, [isOpen]);

    const handleSelect = (val: string) => {
      if (disabled) return;
      onChange?.(val);
      setIsOpen(false);
      triggerRef.current?.focus();
    };

    const handleToggle = () => {
      if (disabled) return;
      setIsOpen((prev) => !prev);
    };

    // Keyboard navigation
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;

      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) => {
            let next = prev + 1;
            while (next < normalizedOptions.length && normalizedOptions[next].disabled) {
              next++;
            }
            return next < normalizedOptions.length ? next : prev;
          });
        }
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setFocusedIndex((prev) => {
            let next = prev - 1;
            while (next >= 0 && normalizedOptions[next].disabled) {
              next--;
            }
            return next >= 0 ? next : prev;
          });
        }
      } else if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        if (isOpen) {
          if (focusedIndex >= 0 && focusedIndex < normalizedOptions.length) {
            const item = normalizedOptions[focusedIndex];
            if (!item.disabled) {
              handleSelect(item.value);
            }
          }
        } else {
          setIsOpen(true);
        }
      } else if (e.key === "Escape") {
        e.preventDefault();
        setIsOpen(false);
        triggerRef.current?.focus();
      } else if (e.key === "Tab") {
        setIsOpen(false);
      }
    };

    return (
      <div
        ref={containerRef}
        className={cn(
          "relative w-full text-left",
          isOpen ? "z-30" : "z-0",
          className
        )}
      >
        {/* Optional built-in label */}
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              "block text-[10px] xs:text-[11px] sm:text-xs font-mono uppercase tracking-wider text-neutral-700 dark:text-neutral-300 font-semibold mb-1.5",
              labelClassName
            )}
          >
            {label}
            {required && <span className="text-amber-500 ml-1">*</span>}
          </label>
        )}

        {/* Hidden native input for standard form submission */}
        {name && <input type="hidden" name={name} value={value} />}

        {/* Custom Select Trigger Button */}
        <button
          ref={triggerRef}
          id={selectId}
          type="button"
          disabled={disabled}
          onClick={handleToggle}
          onKeyDown={handleKeyDown}
          role="combobox"
          aria-haspopup="listbox"
          aria-expanded={isOpen}
          aria-controls={listboxId}
          aria-label={ariaLabelProp || label || placeholder || "Select option"}
          aria-required={required}
          aria-invalid={Boolean(error)}
          className={cn(
            "group relative w-full min-h-[42px] px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 select-none flex items-center justify-between gap-2 text-left cursor-pointer",
            "border bg-neutral-50 dark:bg-neutral-900",
            isOpen
              ? "border-gold-400 dark:border-gold-400 ring-2 ring-gold-400/25 shadow-sm"
              : error
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/20"
              : "border-neutral-300 dark:border-white/10 hover:border-neutral-400 dark:hover:border-white/20 focus:border-gold-400 focus:outline-none focus:ring-2 focus:ring-gold-400/20",
            disabled && "opacity-50 cursor-not-allowed hover:border-neutral-300 dark:hover:border-white/10",
            triggerClassName
          )}
        >
          <span
            className={cn(
              "truncate flex-1 block",
              isPlaceholder
                ? "text-neutral-400 dark:text-neutral-500 font-normal"
                : "text-neutral-900 dark:text-white font-medium"
            )}
          >
            {displayLabel}
          </span>

          <ChevronDown
            className={cn(
              "w-4 h-4 shrink-0 transition-transform duration-200 ease-out",
              isOpen
                ? "rotate-180 text-amber-600 dark:text-gold-400"
                : "text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-600 dark:group-hover:text-neutral-300"
            )}
            aria-hidden="true"
          />
        </button>

        {/* Custom Dropdown Menu Panel */}
        {isOpen && (
          <div
            id={listboxId}
            role="listbox"
            aria-label={ariaLabelProp || label || placeholder || "Options list"}
            className={cn(
              "absolute left-0 right-0 z-50 p-1.5 rounded-xl border shadow-2xl transition-all duration-150 ease-out",
              "bg-white dark:bg-[#0f1015] border-neutral-200 dark:border-white/15 text-neutral-900 dark:text-neutral-100",
              "shadow-[0_14px_40px_-10px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_-10px_rgba(0,0,0,0.95)]",
              placement === "top" ? "bottom-full mb-1.5" : "top-full mt-1.5",
              menuClassName
            )}
          >
            {/* Ambient gold sheen line on top in dark mode */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent pointer-events-none rounded-t-xl" />

            <div
              ref={listRef}
              data-lenis-prevent="true"
              className="max-h-56 sm:max-h-60 overflow-y-auto modal-custom-scrollbar space-y-0.5"
            >
              {normalizedOptions.map((opt, idx) => {
                const isSelected = opt.value === value;
                const isFocused = idx === focusedIndex;
                const isPlaceholderItem = opt.value === "";

                return (
                  <button
                    key={`${opt.value}-${idx}`}
                    type="button"
                    role="option"
                    aria-selected={isSelected}
                    disabled={opt.disabled}
                    onClick={() => handleSelect(opt.value)}
                    onMouseEnter={() => setFocusedIndex(idx)}
                    className={cn(
                      "w-full text-left px-3 py-2.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium transition-colors flex items-center justify-between group cursor-pointer select-none",
                      isSelected
                        ? "bg-gold-500/15 dark:bg-gold-400/20 text-amber-700 dark:text-gold-300 font-semibold"
                        : isFocused
                        ? "bg-neutral-100 dark:bg-white/[0.08] text-neutral-950 dark:text-white"
                        : "text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-white/5 hover:text-neutral-950 dark:hover:text-white",
                      opt.disabled && "opacity-40 pointer-events-none",
                      optionClassName
                    )}
                  >
                    <span
                      className={cn(
                        "truncate",
                        isPlaceholderItem &&
                          !isSelected &&
                          "text-neutral-400 dark:text-neutral-500 font-normal"
                      )}
                    >
                      {opt.label}
                    </span>

                    {isSelected && (
                      <Check
                        className="h-4 w-4 text-amber-600 dark:text-gold-400 shrink-0 ml-2"
                        aria-hidden="true"
                      />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Error message */}
        {error && (
          <p className="mt-1 text-xs text-red-500 dark:text-red-400 font-medium">
            {error}
          </p>
        )}
      </div>
    );
  }
);

CustomSelect.displayName = "CustomSelect";
