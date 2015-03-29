# Homepage (Root path)
require 'google_places'
require 'sinatra/json'
require 'pry'

get '/' do
  # @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  # @spots = @client.spots(49.282130099999996, -123.10830340000001, :types => 'restaurant')

  erb :index
end

post '/selection' do
  @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  @meal = params[:meal].to_s
  @danger = params[:danger]
  @radius = params[:radius].to_i

  # @spots = @client.spots(-33.8670522, 151.1957362, :types => 'restaurant')
  @spots = @client.spots(49.2821060,-123.1082710, :name => @meal, :radius => @radius)

  # puts @spots.inspect

  # binding.pry

  # puts "meal #{@meal}"
  # puts "danger #{@danger}"
  # puts "radius #{@radius}"

  @spots.each do |spot|
    puts spot.name
    puts spot.vicinity
    puts spot.rating
    # puts spot.inspect
  end

  # puts @spots[0].name
  # puts @spots[0].rating
  
  json @spots
  # @meal
end