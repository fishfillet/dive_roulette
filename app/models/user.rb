class User 
  
  geocoded_by :ip
  after_validation :geocode

  request.ip                  # return your ip address
  request.location            # return a Geocoder::Result which corresponds to your location
  request.location.try(:city)

end