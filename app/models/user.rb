class User < ActiveRecord::Base  
 extend Geocoder::Model::ActiveRecord

  attr_accessor :latitude, :longitude


}

# class User < ActiveRecord::Base
  
#   geocoded_by :ip
#   after_validation :geocode

#   request.ip                  # return your ip address
#   request.location            # return a Geocoder::Result which corresponds to your location
#   request.location.try(:city)

# end