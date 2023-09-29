package assn05;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MaxBinHeapER  <V, P extends Comparable<P>> implements BinaryHeap<V, P> {

    private List<Prioritized<V,P>> _heap;
    /**
     * Constructor that creates an empty heap of hospital.Prioritized objects.
     */
    public MaxBinHeapER() {
        _heap = new ArrayList<>();
    }

    /**
     * Constructor that builds a heap given an initial array of hospital.Prioritized objects.
     */
    // TODO: overloaded constructor
    public MaxBinHeapER(Prioritized<V, P>[] initialEntries ) {
        _heap = new ArrayList<>();
        Collections.addAll(_heap, initialEntries);
        for (int i = _heap.size(); i >= 0 ; i--){
           bubbleDown(i);
        }
    }

    @Override
    public int size() {
        return _heap.size();
    }


    @Override
    public void enqueue(V value, P priority) {
        Patient patient = new Patient<>(value, priority);
        int parent;
        int i = this._heap.size();
        if (this._heap.size() == 0) {
            this._heap.add(patient);
        }else{
            this._heap.add(patient);
            while(i > 0) {
                if (i % 2 == 0){
                    parent = ((i/2) - 1);
                    if (this._heap.get(parent).getPriority().compareTo(this._heap.get(i).getPriority()) < 0) {
                        Prioritized temp = this._heap.get(i);
                        this._heap.set(i, this._heap.get(parent));
                        this._heap.set(parent, temp);
                    }else{
                        break;
                    }
                }else{
                    parent = ((i)/2);
                    if (this._heap.get(parent).getPriority().compareTo(this._heap.get(i).getPriority()) < 0) {
                        Prioritized temp = this._heap.get(i);
                        this._heap.set(i, this._heap.get(parent));
                        this._heap.set(parent, temp);
                    }else{
                        break;
                    }
                }
                i = parent;
            }
        }
    }


    public void enqueue(V value) {
        Patient patient = new Patient<>(value);
        int parent;
        int i = this._heap.size();

        if (this._heap.size() == 0) {
            this._heap.add(patient);
        }else{
            this._heap.add(patient);
            while(i > 0) {
                if (i % 2 == 0){
                    parent = ((i/2) - 1);
                    if (this._heap.get(parent).getPriority().compareTo(this._heap.get(i).getPriority()) < 0) {
                        Prioritized temp = this._heap.get(i);
                        this._heap.set(i, this._heap.get(parent));
                        this._heap.set(parent, temp);
                    }else{
                        break;
                    }
                }else{
                    parent = ((i)/2);
                    if (this._heap.get(parent).getPriority().compareTo(this._heap.get(i).getPriority()) < 0) {
                        Prioritized temp = this._heap.get(i);
                        this._heap.set(i, this._heap.get(parent));
                        this._heap.set(parent, temp);
                    }else{
                        break;
                    }
                }
                i = parent;
            }
        }
    }


    @Override
    public V dequeue() {
        if (this._heap.size() == 0){
            return null;
        }
        V temp = this._heap.get(0).getValue();
        this._heap.set(0, _heap.get(_heap.size() - 1));
        this._heap.remove(_heap.size() - 1);
        bubbleDown(0);

        return temp;
    }

    public void bubbleDown(int index) {
        int left;
        int right;

            left = (2 * index) + 1;
            right = (2 * index) + 2;
            if (left < _heap.size() && right < _heap.size()) {
                if (this._heap.get(left).getPriority().compareTo(this._heap.get(index).getPriority()) > 0 || this._heap.get(right).getPriority().compareTo(this._heap.get(index).getPriority()) > 0) {
                    if (this._heap.get(right).getPriority().compareTo(this._heap.get(left).getPriority()) > 0) {
                        Prioritized temp = this._heap.get(index);
                        this._heap.set(index, this._heap.get(right));
                        this._heap.set(right, temp);
                        bubbleDown(right);
                    } else {
                        Prioritized temp = this._heap.get(index);
                        this._heap.set(index, this._heap.get(left));
                        this._heap.set(left, temp);
                        bubbleDown(left);
                    }
                }
            }else if(left < _heap.size()) {
                if (this._heap.get(left).getPriority().compareTo(this._heap.get(index).getPriority()) > 0) {
                    Prioritized temp = this._heap.get(index);
                    this._heap.set(index, this._heap.get(left));
                    this._heap.set(left, temp);
                    bubbleDown(left);
                }
            }
    }

    // TODO: getMax
    @Override
    public V getMax() {
        if (this._heap.size() == 0){
            return null;
        }
        return this._heap.get(0).getValue();
    }

    public String toString() {
        String str = "Emergency Room Patients (Heaped):\n";
        for (int i = 0; i < _heap.size(); i++) {
            str += (i + 1) + ". " +  _heap.get(i).getValue() +
                    " " + "(Priority " + _heap.get(i).getPriority() + ")" + "\n";
        }
        return str;
    }

    @Override
    public Prioritized<V, P>[] getAsArray() {
        Prioritized<V,P>[] result = (Prioritized<V, P>[]) Array.newInstance(Prioritized.class, size());
        return _heap.toArray(result);
    }






}
