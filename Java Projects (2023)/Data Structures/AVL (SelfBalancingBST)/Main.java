package assn06;
// Different test cases to test out the AVLTree class.

public class Main {
    public static void main(String[] args) {

        // Create a new empty tree.
//        AVLTree<Integer> avl_bst = new AVLTree<>();
//        System.out.println(avl_bst);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(5);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(20);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(200);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(21800);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(20485);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(40);
//        avl_bst = (AVLTree<Integer>) avl_bst.insert(-207);
//////        DELETE TEST!!!
//        System.out.println("Smallest Value: " + avl_bst.findMin());
//        System.out.println("Largest Value: " + avl_bst.findMax());
////
//        System.out.println("Parent: " + avl_bst.getValue());
//        System.out.println("Left Child: " + avl_bst.getLeft().getValue());
//        System.out.println("Right Child: " + avl_bst.getRight().getValue());
//        System.out.println(avl_bst.contains(18));

        // Insert 50 random integers.
        // Note how we need to capture the result of insert back into
        // the variable avl_bst because the post insertion root that is
        // returned might change because of the insertion

//        AVLTree<Integer> avl_bst2 = new AVLTree<>();
//
//        for (int i=0; i<50; i++) {
//            avl_bst2 = (AVLTree<Integer>) avl_bst2.insert((int) (Math.random()*100));
//        }
//
//        System.out.println(avl_bst2.height());

        // Now insert 50 integers in increasing order which would
        // cause a simple BST to become very tall but for our
        // self-balancing tree won't be too bad.

        AVLTree<Integer> avl_bst4 = new AVLTree<>();
        for (int i=0; i<5; i++) {
            avl_bst4 = (AVLTree<Integer>) avl_bst4.insert(i);
        }
        avl_bst4 = (AVLTree<Integer>) avl_bst4.remove(1);
        avl_bst4 = (AVLTree<Integer>) avl_bst4.remove(3);
        avl_bst4.printBreadthFirstTraversal();
        System.out.println();
        System.out.println(avl_bst4.height());

        System.out.println("\n");

//        _right._element = null;
//        _right._height = -1;
//        _right._size = 0;
//
//        _left._element = null;
//        _left._height = -1;
//        _left._size = 0;

    }
}
