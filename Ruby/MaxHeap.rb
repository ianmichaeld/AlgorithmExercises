class MaxHeap
  attr_accessor :size, :as_array

  def initialize(values = [])
    @as_array = []
    @size = 0
    values.each do |v|
      self.add(v)
    end
  end

  def add(value)
    @as_array << value
    @size += 1
    bubble_up()
  end

  def left_index(index)
    2 * index + 1
  end

  def right_index(index)
    2 * index + 2
  end

  def parent_index(index)
    index == 0 ? nil : (index - 1) / 2
  end

  def left(index)
    @as_array[left_index(index)]
  end
  def right(index)
    @as_array[right_index(index)]
  end
  def parent(index)
    parent_index(index) ? @as_array[parent_index(index)] : nil
  end

  def swap(i, j)
    @as_array[i], @as_array[j] = @as_array[j], @as_array[i]
  end
  
  def bubble_up
    index = @size - 1
    while parent_index(index) and @as_array[index] > parent(index)
      swap(index, parent_index(index))
      index = parent_index(index)
    end
  end

  def cascade
    index = 0
    while left(index)
      max_child = left_index(index)
      if right(index)
        max_child = left(index) >= right(index) ? left_index(index) : right_index(index)
      end
      if @as_array[index] >= @as_array[max_child]
        break
      else
        swap(index, max_child)
      end
      index = max_child
    end
  end

  def peek
    @as_array[0]
  end

  def pop
    raise 'Your heap is empty.' if @size == 0
    max = @as_array.shift
    @as_array.unshift(@as_array.pop)
    cascade
    @size -= 1
    max
  end
end