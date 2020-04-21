# Definition for a binary tree node.
class TreeNode
    attr_accessor :val, :left, :right
    def initialize(val)
        @val = val
        @left, @right = nil, nil
    end
end

# @param {TreeNode} root
# @return {Integer}
def diameter_of_binary_tree(root)
    @result = 0 
    def diameter(root)
        return 0 if root.nil?
        left, right = diameter(root.left), diameter(root.right)
        @result = [@result, left + right].max
        return [left, right].max + 1
    end
    diameter(root)
    @result
  end