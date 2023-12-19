package assn04;

public class Main {
  public static void main(String[] args) {
    /*
    This is a basic example of how to create a BST and add values to it.
    You should add more examples and use this class to debug your code
    */
    BST<Integer> bst = new NonEmptyBST<Integer>(3);
      bst = bst.insert(8);
      bst = bst.insert(1);

    BST<Integer> bst2 = new NonEmptyBST<Integer>(10);
    bst2 = bst2.insert(8);
    bst2 = bst2.insert(9);
    bst2 = bst2.insert(7);
    bst2 = bst2.insert(6);
    bst2 = bst2.insert(60);
    bst2 = bst2.insert(55);
    bst2 = bst2.insert(85);


    BST<Integer> bst3 = new NonEmptyBST<Integer>(78);
    bst3 = bst3.insert(84);
    bst3 = bst3.insert(31);
    bst3 = bst3.insert(38);
    bst3 = bst3.insert(13);
    bst3 = bst3.insert(10);
    bst3 = bst3.insert(40);
    bst3 = bst3.insert(12);
    bst3 = bst3.insert(39);
    bst3 = bst3.insert(47);

    BST<Integer> bst4 = new NonEmptyBST<Integer>(99);

    bst4.printBreadthFirstTraversal();

  }
}
