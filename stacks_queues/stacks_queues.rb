
# implement stack
class Node
  def initialize(val)
    self.value = value
    self.next = nil
  end
end

class Stack
  def initialize()
    self.top = nil
    self.bottom = nil
    self.length = 0
  end

  def push(val)
    newNode = Node.new(val)

    # check if empty
    if !self.top
      self.top = newNode
      self.bottom = newNode
    else
      temp = self.top
      self.top = newNode
      self.top.next = temp
    end
    # if not empty
    self.length += 1
  end

  def pop()
    if !self.top
      return nil
    end
    temp = self.top
    if self.top == self.bottom
      self.bottom = nil
    end
    self.top = self.top.next
    self.length -= 1
    return temp.value
  end

  def size
    self.length
  end
end



# implement queue
class Node
  def initialize(val)
    self.value = val
    self.next = nil
  end
end

class Queue
  def initialize
    self.front = nil
    self.back = nil
    self.length = 0
  end

  def enqueue(val)
    newNode = Node.new(val)
    if !self.front
      self.front = newNode
      self.back = newNode
    else
      self.back.next = newNode
      self.back = newNode
      self.length += 1
    end
  end

  def dequeue
    if !self.front
      return nil
    end

    if self.front == self.back
      self.back = nil
    end

    temp = self.front
    self.front = self.front.next
    self.length -=1
    return temp.value
  end

  def size
    self.length
  end
end

