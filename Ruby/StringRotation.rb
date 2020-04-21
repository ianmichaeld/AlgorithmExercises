# @param {String} s
# @param {Integer[][]} shift
# @return {String}
def string_shift(s, shift)
  net = net_shift(shift)
  a = s.split('')
  net.times {a.unshift(a.pop)} if net > 0
  net.abs.times {a.push(a.shift)} if net < 0
  a.join('')
end

def net_shift(shift)
  shift.reduce(0) { |net, operation| net = operation[0] == 0 ? net - operation[1] : net + operation[1] }
end

s = "wpdhhcj"
shift = [[0,7],[1,7],[1,0],[1,3],[0,3],[0,6],[1,2]]