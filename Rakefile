require 'json'
require 'mongoid'
require 'rake/testtask'
require 'geocoder'
require 'rest-client'
require 'open-uri'

ENV['RACK_ENV'] ||= 'development'
Mongoid.load!('config/mongoid.yml', ENV['RACK_ENV'])

# models
require_relative 'app/models/vendor/vendor'

# helper
require_relative 'lib/io_helper'

# subtasks
require_relative 'tasks/db'
require_relative 'tasks/assets'
require_relative 'tasks/profiles'
require_relative 'tasks/geo'

# code style
# require 'rubocop/rake_task'
# RuboCop::RakeTask.new

# tests
Rake::TestTask.new do |t|
  t.test_files = FileList['test/**/test*.rb']
  t.ruby_opts = ['-W1']
end

task default: %i[test]
