/**
 * Isolated PostCSS configuration for Strapi CMS.
 * Prevents PostCSS loader from traversing up to the parent Next.js directory and loading root's Tailwind CSS configuration.
 */
module.exports = {
  plugins: {},
};
