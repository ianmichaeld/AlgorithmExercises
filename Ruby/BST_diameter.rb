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
def height_of_binary_tree(root)
    return 0 if root.nil?
    1 + [height_of_binary_tree(root.left), height_of_binary_tree(root.right)].max
end

# @param {TreeNode} root
# @return {Integer}
def diameter_of_binary_tree(root)
  [diameter_of_binary_tree(root.left), diameter_of_binary_tree(root.right), height_of_binary_tree(root.left) + height_of_binary_tree(root.right)].max
end