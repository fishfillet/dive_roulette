# Homepage (Root path)
require 'google_places'
require 'sinatra/json'
require 'geocoder'
require 'pry'

get '/' do
  erb :index
end

post '/selection' do
  @client = GooglePlaces::Client.new("AIzaSyCRKHOPOd_h4GLfqrLPqkEap7l3Q_Tuf9A")
  
  @meal = params[:meal].to_s
  @danger_level = params[:danger].to_s
  @radius = params[:radius].to_i

  @location = Geocoder.search("70.36.63.26")
  latitude = @location[0].data["latitude"]
  longitude = @location[0].data["longitude"]

  @spots = @client.spots(latitude, longitude, :name => @meal, :radius => @radius)

  # categories 3 levels
  def categories_danger_level
    @safe_restaurants = Array.new
    @middle_restaurants = Array.new
    @dangerous_restaurants = Array.new

    @max = @spots.count-1

    # safe: nil~0.9 , middle: 1~2.9, safe: 3~3.9
    for i in 0..@max
      if (@spots[i].rating == nil) || (@spots[i].rating < 1)
        @dangerous_restaurants << @spots[i]
      else
        @middle_restaurants << @spots[i] if @spots[i].rating >= 1 && @spots[i].rating < 2.9
        @safe_restaurants << @spots[i] if @spots[i].rating >= 3 && @spots[i].rating < 4
      end
    end

  end


  def assign_restaurant

    case @danger_level
      # safe < middle < dangerous
      when "safe"
        if @safe_restaurants.any?
          @safe_pick = @safe_restaurants[rand(0..@safe_restaurants.count-1)]
        elsif @middle_restaurants.any?
          @safe_pick = @middle_restaurants[rand(0..@middle_restaurants.count-1)]
        elsif @dangerous_restaurants.any?
          @safe_pick = @dangerous_restaurants[rand(0..@dangerous_restaurants.count-1)]
        end
        @result = @safe_pick

      # middle < safe < dangerous
      when "middle"
        if @middle_restaurants.any?
          @middle_pick = @middle_restaurants[rand(0..@middle_restaurants.count-1)]
        elsif @safe_restaurants.any?
          @middle_pick = @safe_restaurants[rand(0..@safe_restaurants.count-1)]
        elsif @dangerous_restaurants.any?
          @middle_pick = @dangerous_restaurants[rand(0..@dangerous_restaurants.count-1)]
        end
        @result = @middle_pick

      # dangerouse < middle < safe
      when "dangerous"
        if @dangerous_restaurants.any?
          @dangerous_pick = @dangerous_restaurants[rand(0..@dangerous_restaurants.count-1)]
        elsif @middle_restaurants.any?
          @dangerous_pick = @middle_restaurants[rand(0..@middle_restaurants.count-1)]
        elsif @dangerous_restaurants.any?
          @dangerous_pick = @safe_restaurants[rand(0..@safe_restaurants.count-1)]
        end
        @result = @dangerous_pick
    end

  end

  categories_danger_level
  assign_restaurant

  puts "all the restaurants: "
  @spots.each do |spot|
    puts spot.name
    # puts spot.vicinity
    puts spot.rating
    # puts spot.inspect
  end

  json @result
end