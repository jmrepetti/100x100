# require 'net/http'
# while true
#   Thread.new do
#     x = rand(100)
#     y = rand(100)  
#     rgb = "ff#{rand(255).to_s(16)}#{rand(255).to_s(16)}"
#     #rgb = "#{rand(100).to_s(16)}#{rand(100).to_s(16)}#{rand(255).to_s(16)}"
#     uri = URI("http://localhost:3001/#{x}/#{y}/ffffff")
#     Net::HTTP.get(uri) # => String
#   end
# end

require 'net/http'

threads = []
100.times do |x|
  100.times do |y|
    Thread.new do
      # rgb = "ff#{rand(255).to_s(16)}#{rand(255).to_s(16)}"
      #rgb = "#{rand(100).to_s(16)}#{rand(100).to_s(16)}#{rand(255).to_s(16)}"
      uri = URI("http://localhost:3001/#{x}/#{y}/ffffff")
      Net::HTTP.get(uri) # => String
      sleep(rand 5)
   end
  end
end
# threads.each {|t| t.join}
# Thread.list.each {|t| t.join if t != Thread.current}
