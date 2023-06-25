require_relative 'boot'

require 'rails/all'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

module DemoRails7WithDeviseSeries
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 7.0

    # Configuration for the application, engines, and railties goes here.
    #
    # These settings can be overridden in specific environments using the files
    # in config/environments, which are processed later.
    #
    # config.time_zone = "Central Time (US & Canada)"
    # config.eager_load_paths << Rails.root.join("extras")

    # Since we will be using other origins
    # config.action_controller.forgery_protection_origin_check = false

    config.action_controller.default_protect_from_forgery = true
    config.middleware.insert_before 0, Rack::Cors do
      allow do
         origins 'http://localhost:5173'
         resource '*', :headers => :any, :methods => [:get, :post, :patch, :put, :delete], credentials: true
       end
    end
  end
end