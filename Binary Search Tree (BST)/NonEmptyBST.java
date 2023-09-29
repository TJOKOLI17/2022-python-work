package assn04;

import java.util.LinkedList;
import java.util.Queue;

public class NonEmptyBST<T extends Comparable<T>> implements BST<T> {
	private T _element;
	private BST<T> _left;
	private BST<T> _right;

	public NonEmptyBST(T element) {

		_left = new EmptyBST<T>();
		_right = new EmptyBST<T>();
		_element = element;
	}


	@Override
	public BST<T> insert(T element) {
		if(element.compareTo(_element) == 0){
			return this;
		}

		if(element.compareTo(_element) > 0){
			if(_right.isEmpty()){
				_right = new NonEmptyBST<T>(element);
			}else{
				_right = _right.insert(element);
			}

		}else{
			if(_left.isEmpty()){
				_left = new NonEmptyBST<T>(element);
			}else{
				_left = _left.insert(element);
			}
		}
		return this;
	}


	@Override
	public BST<T> remove(T element) {
		if(!element.equals(_element)) {
			if(element.compareTo(_element) > 0){
				_right = _right.remove(element);
			} else {
				_left = _left.remove(element);
			}
		}else{
			if (_left.isEmpty() && _right.isEmpty()) {
				return new EmptyBST<T>();

			} else if (_left.isEmpty() || _right.isEmpty()) {
				if (_left.isEmpty()) {
					return _right;
				} else {
					return _left;
				}

			}else{
				BST<T> current = this._right;
				while(!current.getLeft().isEmpty()) { // s
					current = current.getLeft();
				}// lines 63 - 65 establishes a temp BST and loops through right side of BST until it finds the smallest right value

				T previous = current.getElement(); // gets the value of the rightmost NonEmptyBST
				this._element = previous; // Sets the value of the BST we are 'removing' to be the value of previous
				this._right = this._right.remove(previous); //deletes previous since we know it's a leaf
			}
		}
		return this;
	}


	@Override
	public void printPreOrderTraversal() {
		System.out.print(this.getElement() + " ");
		if(!this.getLeft().isEmpty()) {
			this.getLeft().printPreOrderTraversal();
		}

		if(!this.getRight().isEmpty()) {
			this.getRight().printPreOrderTraversal();
		}
	}


	@Override
	public void printPostOrderTraversal() {
		this.getLeft().printPostOrderTraversal();// if left child is an EmptyBST, returns nothing
		this.getRight().printPostOrderTraversal(); // if right child is an EmptyBST, returns nothing
		System.out.print(this.getElement() + " ");
	}


	@Override
	public void printBreadthFirstTraversal() {
		if (this.getLeft().isEmpty() && this.getRight().isEmpty()) {
			System.out.print(this.getElement() + " ");
			System.exit(0);
		}
		Queue<BST<T>> queue = new LinkedList<>();

		queue.add(this);
		BST<T> current; // tracks pointers to rest of the tree
		while (!queue.isEmpty()){ // loops through code as long as queue isn't empty
			current = queue.poll(); // gets the first value in the queue and removes it from the queue
			System.out.print(current.getElement() + " ");
			if (!current.getLeft().isEmpty()) { //checks if current (a reference to rest of the tree) has a left child
				queue.add(current.getLeft()); // adds left child to the queue
			}

			if (!current.getRight().isEmpty()) { //checks if current (a reference to rest of the tree) has a right child
				queue.add(current.getRight()); // adds left child to the queue
			}
		}
	}


	@Override
	public int getHeight() {
		   return Math.max(_left.getHeight(), _right.getHeight())+1;
	}


	@Override
	public BST<T> getLeft() {
		return _left;
	}

	@Override
	public BST<T> getRight() {
		return _right;
	}

	@Override
	public T getElement() {
		return _element;
	}

	@Override
	public boolean isEmpty() {
		return false;
	}
}
