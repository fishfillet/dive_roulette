# Homepage (Root path)
require 'google_places'
require 'sinatra/json'
require 'geocoder'
require 'pry'

get '/' do
  # @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  # @spots = @client.spots(49.282130099999996, -123.10830340000001, :types => 'restaurant')

  erb :index
end

post '/selection' do
  @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  @meal = params[:meal].to_s
  @danger = params[:danger].to_s
  @radius = params[:radius].to_i

  @result = Geocoder.search("70.36.63.26")
  latitude = @result[0].data["latitude"]
  longitude = @result[0].data["longitude"]

  @spots = @client.spots(latitude, longitude, :name => @meal, :radius => @radius)

  @max = @spots.count-1

  def sort_by_danger
    @heightest_rate = @spots[0]
    @middle_rate = @spots[0]
    @lowest_rate = @spots[0]

    # find max
    for i in 1..@max
      @heightest_rate = [@spots[i].rating, @heightest_rate].max
    #   @lowest_rate = [@spots[i].rating, @lowest_rate].min
    end

    # puts "heigh: #{@heightest_rate.name}"
    # puts "low: #{@lowest_rate.name}"

  end

  # sort_by_danger  

  @spots.each do |spot|
    puts spot.name
    # puts spot.vicinity
    puts spot.rating
    # puts spot.inspect
  end
  
  json @spots
end