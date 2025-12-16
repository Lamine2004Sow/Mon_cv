source "https://rubygems.org"

# Jekyll
gem "jekyll", "~> 4.3"

# Plugins recommandés pour GitHub Pages
gem "jekyll-feed", "~> 0.12"
gem "jekyll-sitemap", "~> 1.4"
gem "jekyll-seo-tag", "~> 2.8"

# Thème (si utilisé)
gem "minima", "~> 2.5"

# Windows et JRuby ne supportent pas les gems de performance
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance et optimisation
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Grouper les gems de développement
group :development do
  gem "jekyll-admin", :group => :jekyll_plugins
end

# Plugins Jekyll
plugins = [
  "jekyll-feed",
  "jekyll-sitemap",
  "jekyll-seo-tag"
]
