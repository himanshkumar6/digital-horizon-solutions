import cv2
import numpy as np
import os

# Read the uploaded logo image
img_path = 'public/logo-original.png'
if not os.path.exists(img_path):
    raise FileNotFoundError(f"Missing {img_path}")

img = cv2.imread(img_path)

def contour_to_svg_path(contour, offset_x=0, offset_y=0, epsilon=0.45):
    approx = cv2.approxPolyDP(contour, epsilon, True)
    pts = approx.reshape(-1, 2)
    cmds = [f"M {pts[0][0] + offset_x:.1f},{pts[0][1] + offset_y:.1f}"]
    for pt in pts[1:]:
        cmds.append(f"L {pt[0] + offset_x:.1f},{pt[1] + offset_y:.1f}")
    cmds.append("Z")
    return " ".join(cmds)

# -------------------------------------------------------------
# 1. MONOGRAM EXTRACTION
# -------------------------------------------------------------
# Monogram bounding box in original image: y ~ [112, 316], x ~ [396, 643]
mono_roi = img[112:316, 396:643]
gray_mono = cv2.cvtColor(mono_roi, cv2.COLOR_BGR2GRAY)
_, thresh_mono = cv2.threshold(gray_mono, 25, 255, cv2.THRESH_BINARY)
contours_m, _ = cv2.findContours(thresh_mono, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

# Sort by y coordinate: top is gold (contour 0), bottom is silver (contour 1)
contours_m = sorted(contours_m, key=lambda c: cv2.boundingRect(c)[1])
gold_cnt = contours_m[0]
silver_cnt = contours_m[1]

# Bounding box of entire monogram inside ROI
x_g, y_g, w_g, h_g = cv2.boundingRect(gold_cnt)
x_s, y_s, w_s, h_s = cv2.boundingRect(silver_cnt)
min_x = min(x_g, x_s)
min_y = min(y_g, y_s)
max_x = max(x_g + w_g, x_s + w_s)
max_y = max(y_g + h_g, y_s + h_s)

padding = 4
mono_w = max_x - min_x + padding * 2
mono_h = max_y - min_y + padding * 2

gold_path = contour_to_svg_path(gold_cnt, padding - min_x, padding - min_y, 0.4)
silver_path = contour_to_svg_path(silver_cnt, padding - min_x, padding - min_y, 0.4)

# Write public/logo-mark.svg
logo_mark_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {mono_w} {mono_h}" fill="none">
  <defs>
    <!-- Metallic Warm Gold Gradient for Top Wing -->
    <linearGradient id="goldGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C6615" />
      <stop offset="25%" stop-color="#C2962A" />
      <stop offset="60%" stop-color="#F2DC85" />
      <stop offset="90%" stop-color="#E5C07B" />
      <stop offset="100%" stop-color="#CA9E32" />
    </linearGradient>

    <!-- Metallic Brushed Silver/Platinum Gradient for Bottom Wing & Swoosh -->
    <linearGradient id="silverGrad" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#7C828D" />
      <stop offset="35%" stop-color="#B8BEC8" />
      <stop offset="75%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#E2E5EA" />
    </linearGradient>
  </defs>

  <!-- Top D Shape (Metallic Gold) -->
  <path d="{gold_path}" fill="url(#goldGrad)" />

  <!-- Bottom D Shape with Horizon Swoosh (Metallic Silver) -->
  <path d="{silver_path}" fill="url(#silverGrad)" />
</svg>
"""

with open('public/logo-mark.svg', 'w', encoding='utf-8') as f:
    f.write(logo_mark_svg)
print("Saved public/logo-mark.svg")

# -------------------------------------------------------------
# 2. TEXT VECTOR EXTRACTION
# -------------------------------------------------------------
# Text region: y ~ [340, 455], x ~ [178, 846]
text_roi = img[340:455, 178:846]
gray_text = cv2.cvtColor(text_roi, cv2.COLOR_BGR2GRAY)
_, thresh_text = cv2.threshold(gray_text, 28, 255, cv2.THRESH_BINARY)
contours_t, hierarchy_t = cv2.findContours(thresh_text, cv2.RETR_CCOMP, cv2.CHAIN_APPROX_TC89_KCOS)

text_paths = []
# Loop over outer contours and their holes
for idx, cnt in enumerate(contours_t):
    # If it is an outer contour (parent == -1)
    if hierarchy_t[0][idx][3] == -1:
        outer_d = contour_to_svg_path(cnt, 0, 0, 0.45)
        # Check if it has child holes
        child_idx = hierarchy_t[0][idx][2]
        hole_d = ""
        while child_idx != -1:
            hole_cnt = contours_t[child_idx]
            hole_d += " " + contour_to_svg_path(hole_cnt, 0, 0, 0.45)
            child_idx = hierarchy_t[0][child_idx][0] # next sibling
        
        full_letter_d = outer_d + ((" " + hole_d) if hole_d else "")
        text_paths.append(full_letter_d)

combined_text_path = " ".join(text_paths)

# -------------------------------------------------------------
# 3. WRITE FULL STACKED LOGO (public/logo.svg)
# -------------------------------------------------------------
# In the original image:
# Monogram is centered above the text
# Total width of text is 668px
# Monogram width is ~244px, centered at x = (668 - 244)/2 = 212
offset_x_mono = (668 - mono_w) / 2
offset_y_mono = 10
offset_y_text = mono_h + 30
total_height = offset_y_text + 120
total_width = 675

full_gold_path = contour_to_svg_path(gold_cnt, offset_x_mono, offset_y_mono, 0.4)
full_silver_path = contour_to_svg_path(silver_cnt, offset_x_mono, offset_y_mono, 0.4)

full_logo_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {total_width} {total_height}" fill="none">
  <defs>
    <!-- Metallic Warm Gold Gradient for Top Wing -->
    <linearGradient id="goldGradFull" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C6615" />
      <stop offset="25%" stop-color="#C2962A" />
      <stop offset="60%" stop-color="#F2DC85" />
      <stop offset="90%" stop-color="#E5C07B" />
      <stop offset="100%" stop-color="#CA9E32" />
    </linearGradient>

    <!-- Metallic Brushed Silver/White Gradient for Bottom Wing & Wordmark -->
    <linearGradient id="silverGradFull" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#858B96" />
      <stop offset="35%" stop-color="#C0C5CF" />
      <stop offset="75%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#E2E5EA" />
    </linearGradient>
  </defs>

  <!-- D Monogram (Gold Top) -->
  <path d="{full_gold_path}" fill="url(#goldGradFull)" />

  <!-- D Monogram (Silver Bottom & Swoosh) -->
  <path d="{full_silver_path}" fill="url(#silverGradFull)" />

  <!-- Wordmark: DIGITAL HORIZON — SOLUTIONS — -->
  <g transform="translate(4, {offset_y_text})" fill="url(#silverGradFull)" fill-rule="evenodd">
    <path d="{combined_text_path}" />
  </g>
</svg>
"""

with open('public/logo.svg', 'w', encoding='utf-8') as f:
    f.write(full_logo_svg)
print("Saved public/logo.svg (Full stacked)")

# -------------------------------------------------------------
# 4. WRITE HORIZONTAL NAVBAR LOGO (public/logo-navbar.svg)
# -------------------------------------------------------------
# Monogram on the left (scaled to match text height ~60px), text on the right
# Ideal for horizontal floating navbar
scale = 0.38
scaled_mono_w = mono_w * scale
scaled_mono_h = mono_h * scale
nav_h = 68
nav_w = int(scaled_mono_w + 16 + 668 * 0.42 + 20)

scaled_gold = contour_to_svg_path(gold_cnt, 0, (nav_h - scaled_mono_h)/2 / scale, 0.4)
scaled_silver = contour_to_svg_path(silver_cnt, 0, (nav_h - scaled_mono_h)/2 / scale, 0.4)

navbar_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {nav_w} {nav_h}" fill="none">
  <defs>
    <linearGradient id="goldGradNav" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C6615" />
      <stop offset="25%" stop-color="#C2962A" />
      <stop offset="60%" stop-color="#F2DC85" />
      <stop offset="90%" stop-color="#E5C07B" />
      <stop offset="100%" stop-color="#CA9E32" />
    </linearGradient>
    <linearGradient id="silverGradNav" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#858B96" />
      <stop offset="35%" stop-color="#C0C5CF" />
      <stop offset="75%" stop-color="#FFFFFF" />
      <stop offset="100%" stop-color="#E2E5EA" />
    </linearGradient>
  </defs>

  <!-- Left Monogram Icon -->
  <g transform="scale({scale})">
    <path d="{scaled_gold}" fill="url(#goldGradNav)" />
    <path d="{scaled_silver}" fill="url(#silverGradNav)" />
  </g>

  <!-- Right Wordmark -->
  <g transform="translate({scaled_mono_w + 16:.1f}, {(nav_h - 115 * 0.42)/2:.1f}) scale(0.42)" fill="url(#silverGradNav)" fill-rule="evenodd">
    <path d="{combined_text_path}" />
  </g>
</svg>
"""

with open('public/logo-navbar.svg', 'w', encoding='utf-8') as f:
    f.write(navbar_svg)
print("Saved public/logo-navbar.svg (Horizontal for navbar)")

# -------------------------------------------------------------
# 5. WRITE LIGHT MODE NAVBAR LOGO (public/logo-navbar-light.svg)
# -------------------------------------------------------------
navbar_light_svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {nav_w} {nav_h}" fill="none">
  <defs>
    <linearGradient id="goldGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#8C6615" />
      <stop offset="25%" stop-color="#C2962A" />
      <stop offset="60%" stop-color="#D4AF37" />
      <stop offset="90%" stop-color="#E5C07B" />
      <stop offset="100%" stop-color="#B8860B" />
    </linearGradient>
    <linearGradient id="charcoalGradLight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#111827" />
      <stop offset="50%" stop-color="#1F2937" />
      <stop offset="100%" stop-color="#374151" />
    </linearGradient>
    <linearGradient id="silverWingLight" x1="0%" y1="100%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#4B5563" />
      <stop offset="50%" stop-color="#6B7280" />
      <stop offset="100%" stop-color="#9CA3AF" />
    </linearGradient>
  </defs>

  <!-- Left Monogram Icon -->
  <g transform="scale({scale})">
    <path d="{scaled_gold}" fill="url(#goldGradLight)" />
    <path d="{scaled_silver}" fill="url(#silverWingLight)" />
  </g>

  <!-- Right Wordmark (Dark Charcoal for Light Background) -->
  <g transform="translate({scaled_mono_w + 16:.1f}, {(nav_h - 115 * 0.42)/2:.1f}) scale(0.42)" fill="url(#charcoalGradLight)" fill-rule="evenodd">
    <path d="{combined_text_path}" />
  </g>
</svg>
"""

with open('public/logo-navbar-light.svg', 'w', encoding='utf-8') as f:
    f.write(navbar_light_svg)
print("Saved public/logo-navbar-light.svg (Light mode horizontal)")
