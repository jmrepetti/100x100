
require 'net/http'
while true
  x = rand(100)
  y = rand(100)  
  rgb = "#{rand(255).to_s(16)}#{rand(255).to_s(16)}ff"
  #rgb = "#{rand(100).to_s(16)}#{rand(100).to_s(16)}#{rand(255).to_s(16)}"
  uri = URI("http://localhost:3001/#{x}/#{y}/#{rgb}")
  Net::HTTP.get(uri) # => String
end

File.open("urls_list_all.txt", "w") do |f|
  100.times do |x|
    100.times do |y|
      rgb = "#{rand(255).to_s(16)}#{rand(255).to_s(16)}#{rand(255).to_s(16)}"
      f << "http://localhost:3001/#{x}/#{y}/ffffff\n"
    end
  end
end


# 100.times do |x|
#   100.times do |y|
#     # Thread.new do
#       # rgb = "ff#{rand(255).to_s(16)}#{rand(255).to_s(16)}"
#       #rgb = "#{rand(100).to_s(16)}#{rand(100).to_s(16)}#{rand(255).to_s(16)}"
#       uri = URI("http://localhost:3001/#{x}/#{y}/ffffff")
#       Net::HTTP.get(uri) # => String
#     # end
#   end
# end
