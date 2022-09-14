const tree = {
    value: '1',
    left: {
        value: '2',
        left: {
           value: '4'
        },
        right: {
            value: '5'
        }
    },
    right: {
        value: '3'
    }
}


function deep(node){
    if(!node){
        return
    }
    console.log(node.value);
    deep(node.left)
  
    deep(node.right)
   
  

}
deep(tree)