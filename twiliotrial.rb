
require 'twilio-ruby'
 
# Get your Account Sid and Auth Token from twilio.com/user/account
account_sid = 'AC0e990bcf90c70f5500d32441ed1d3287'
auth_token = '27a60a6d3d4a5a78edfa6bbb822c8d3f'
@client = Twilio::REST::Client.new account_sid, auth_token
 
message = @client.account.messages.create(:body => "waaaazzzzzup",
    :to => "2506860165",     # Replace with your phone number
    :from => "+16042295836")   # Replace with your Twilio number
puts message.sid