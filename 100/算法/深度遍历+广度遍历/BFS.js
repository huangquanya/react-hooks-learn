let widthTraversal2 = (node) => {
    let nodes = []
    let queue = []
    if (node) {
      queue.push(node)
      while (queue.length) {
        let item = queue.shift()
        let children = item.children
        nodes.push(item)
          // 队列，先进先出
          // nodes = [] queue = [parent]
          // nodes = [parent] queue = [child1,child2,child3]
          // nodes = [parent, child1] queue = [child2,child3,child1-1,child1-2]
          // nodes = [parent,child1,child2]
        for (let i = 0; i < children.length; i++) {
          queue.push(children[i])
        }
      }
    }
    return nodes
  }