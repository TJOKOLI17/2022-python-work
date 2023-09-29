package assn06;

import java.util.LinkedList;
import java.util.Queue;
public class AVLTree<T extends Comparable<T>> implements SelfBalancingBST<T> {
    // Fields
    private T _element;
    private AVLTree<T> _left;
    private AVLTree<T> _right;
    private int _height;
    private int _size;
    
    public AVLTree() {
        _element = null;
        _left = null;
        _right = null;
        _height = -1;
        _size = 0;
    }

    @Override
    public boolean isEmpty() {

        return _element == null;
    }

    @Override
    public int height() {

        return _height;
    }

    @Override
    public int size() {

        return _size;
    }


    public AVLTree<T> rotateLeft() {
        AVLTree<T> temp = this._right;
        this._right = temp._left;
        temp._left = this;
        updateSize();
        updateHeight();
        temp.updateSize();
        temp.updateHeight();
        return temp;
    }


    public AVLTree<T> rotateRight() {
        AVLTree<T> temp = this._left;
        this._left = temp._right;
        temp._right = this;
        updateSize();
        updateHeight();
        temp.updateSize();
        temp.updateHeight();
        return temp;
    }

    public AVLTree<T> fix(){
            if (_right.height() > _left.height()) {
                if (_right._left.height() > _right._right.height()) {
                    this._right = this._right.rotateRight();
                }
                return rotateLeft();

            } else if (_left.height() > _right.height()) {
                if (_left._right.height() > _left._left.height()) {
                    this._left = this._left.rotateLeft();
                }
                return rotateRight();
            }

        return this;
    }

    @Override
    public SelfBalancingBST<T> insert(T element) {
        if (this.isEmpty()){
            _element = element;
            _left = new AVLTree<>();
            _right = new AVLTree<>();
        }else{
            if(element.compareTo(_element) > 0){
                _right = (AVLTree<T>) _right.insert(element);

            }else{
                _left = (AVLTree<T>) _left.insert(element);
            }
        }
        updateSize();
        updateHeight();

        if(Math.abs((_right._height - _left._height)) >= 2) {
            return this.fix();
        }
        return this;
    }

    @Override
    public SelfBalancingBST<T> remove(T element) {
        if(isEmpty()){
            return this;
        }
        if(!element.equals(_element)) {
            if(element.compareTo(_element) > 0){
                _right = (AVLTree<T>) _right.remove(element);
            } else {
                _left = (AVLTree<T>) _left.remove(element);
            }
        }else{
            if(_left.isEmpty() && _right.isEmpty()) {
                _element = null;

            }else if(_left.isEmpty() || _right.isEmpty()) {
                if (_left.isEmpty()) {
                    _element = _right._element;
                    _right = new AVLTree<>();
                } else {
                    _element = _left._element;
                    _left = new AVLTree<>();
                }
            }else if(!_left.isEmpty() && !_right.isEmpty()){
                AVLTree<T> current = this._right;
                while(!current.getLeft().isEmpty()) {
                    current = (AVLTree<T>) current.getLeft();
                }
                T previous = current.getValue();
                this._element = previous;
                this._right.remove(previous);
            }
        }
        if(Math.abs((_right._height - _left._height)) >= 2) {
            return this.fix();
        }
        updateSize();
        updateHeight();
        return this;
    }

    @Override
    public T findMin() {
         if (isEmpty()) {
             throw new RuntimeException("Illegal operation on empty tree");
         }
         if (_left.isEmpty()) {
             return _element;
         } else {
             return _left.findMin();
         }
    }

    @Override
    public T findMax() {
        if (isEmpty()) {
            throw new RuntimeException("Illegal operation on empty tree");
        }
        if (_right.isEmpty()) {
            return _element;
        } else {
            return _right.findMax();
        }
    }

    @Override
    public boolean contains(T element) {
        if(isEmpty()){
            return false;
        }
        if(element.equals(_element)) {
            return true;

        }else{
            if (element.compareTo(_element) > 0) {
                return _right.contains(element);
            } else {
                return _left.contains(element);
            }
        }
    }

    @Override
    public T getValue() {
        return _element;
    }

    @Override
    public SelfBalancingBST<T> getLeft() {
        if (isEmpty()) {
            return null;
        }
        return _left;
    }

    @Override
    public SelfBalancingBST<T> getRight() {
        if (isEmpty()) {
            return null;
        }

         return _right;
    }

    public void updateHeight(){
        if(this.isEmpty()){
            _height = -1;
        }else {
            _height = (Math.max(_right._height, _left._height) + 1);
        }
    }

    public void updateSize(){
        if(this.isEmpty()){
            _size = 0;
        }else{
            _size = ((_right._size + _left._size) + 1);
        }

    }

    public void printBreadthFirstTraversal() {
        if (this.getLeft().isEmpty() && this.getRight().isEmpty()) {
            System.out.print(this.getValue() + " ");
            System.exit(0);
        }
        Queue<AVLTree<T>> queue = new LinkedList<>();

        queue.add(this);
        AVLTree<T> current; // tracks pointers to rest of the tree
        while (!queue.isEmpty()){ // loops through code as long as queue isn't empty
            current = queue.poll(); // gets the first value in the queue and removes it from the queue
            System.out.print(current.getValue() + " "); // prints the value removed from the tree.
            if (!current.getLeft().isEmpty()) { //checks if current (a reference to rest of the tree) has a left child
                queue.add( (AVLTree<T>) current.getLeft()); // adds left child to the queue
            }

            if (!current.getRight().isEmpty()) { //checks if current (a reference to rest of the tree) has a right child
                queue.add((AVLTree<T>) current.getRight()); // adds left child to the queue
            }
        }
    }

}
