# frozen_string_literal: true

# In this module you set the value for the different urls of your app
# Those different urls are used for subdomain translations (exemple: en.application.local)
module Url
  # Url  for the +english+ site (production mode)
  PROD_EN_URL = 'to_fill'
  # Url  for the +french+ site (production mode)
  PROD_FR_URL = 'to_fill'
  # Url  for the +english+ site (dev/test mode)
  DEV_EN_URL = 'en.application.local'
  # Url  for the +french+ site (dev/test mode)
  DEV_FR_URL = 'fr.application.local'

  # This constant will be used as a helper to fetch the correct url depending on the locale chosen by the user
  # +url+ is a symbol and its value must be either :
  # - :english_website_url
  # - :french_website_url
  # - ! Any other values will return the url for the english site
  # !!! Access ENV['RAILS_ENV']
  CONFIG = lambda do |url|
    if ENV['RAILS_ENV'] == 'production'
      case url
      when :english_website_url
        PROD_EN_URL
      when :french_website_url
        PROD_FR_URL
      else
        PROD_EN_URL
      end
    else
      case url
      when :english_website_url
        DEV_EN_URL
      when :french_website_url
        DEV_FR_URL
      else
        DEV_EN_URL
      end
    end
  end
end
