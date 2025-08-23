class Jar:
    def __init__(self, capacity=12):
        self._capacity = capacity
        self._size = 0 # track number of cookies in the jar

        if not isinstance(capacity, int) or capacity < 0:
            raise ValueError("capacity must be a non-negative integer") 

    def __str__(self):
        return "🍪" * self._size
    
    def deposit(self, n):
        if not isinstance(n, int) or n < 0:
            raise ValueError("deposit amount must be a non-negative integer")
        if self._size + n > self.capacity:
            raise ValueError("deposit would exceed jar capacity")
        self._size += n

    def withdraw(self, n):
        if not isinstance(n, int) or n < 0:
            raise ValueError("withdraw amount must be a non-negative integer")
        if n > self._size:
            raise ValueError("not enough cookies to withdraw")
        self._size -= n
           
    @property
    def capacity(self):
        return self._capacity  # return the maximum number of cookies the jar can hold  
    
    @property
    def size(self):
        return self._size # return the current number of cookies in the jar
    
        
        