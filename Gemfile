source "https://rubygems.org"

# GitHub Pages — pinned to the version GitHub builds with.
# Using this gem locks Jekyll + plugins to GitHub-supported versions.
gem "github-pages", group: :jekyll_plugins

# Jekyll plugins (all whitelisted on GitHub Pages)
group :jekyll_plugins do
  gem "jekyll-feed"
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-paginate"
  gem "jekyll-redirect-from"
end

# Windows / JRuby compatibility
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

# Webrick is no longer bundled with Ruby >= 3.0
gem "webrick", "~> 1.8"
