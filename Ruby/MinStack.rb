class MinStack
  attr_accessor :size, :array, :currentMin

=begin
  initialize your data structure here.
=end
  def initialize()
      @size = 0 
      @array = []
      @currentMin = nil
  end


=begin
  :type x: Integer
  :rtype: Void
=end
  def push(x)
      if @currentMin && x < @currentMin
          @array << 2 * x - @currentMin
          @currentMin = x
      else
          @array << x
          @currentMin ||= x
      end 
      @size += 1
  end


=begin
  :rtype: Void
=end
  def pop()
      if @size > 0
          removed = @array.pop
          @currentMin = 2 * @currentMin - removed if removed < @currentMin
          @size -= 1
          @currentMin = nil if @size == 0
      else
          raise 'Your stack is empty'
      end
  end


=begin
  :rtype: Integer
=end
  def top()
      @array[-1] < @currentMin ? @currentMin : @array[-1]
  end


=begin
  :rtype: Integer
=end
  def get_min()
      @currentMin
  end


end

# Your MinStack object will be instantiated and called as such:
# obj = MinStack.new()
# obj.push(x)
# obj.pop()
# param_3 = obj.top()
# param_4 = obj.get_min()