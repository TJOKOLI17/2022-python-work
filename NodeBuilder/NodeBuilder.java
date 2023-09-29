import java.util.*;

    class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
            next = null;
        }
    }

    public class NodeBuilder {
        static Node head;

        static void addToList(int data) {
            Node newNode = new Node(data);
            newNode.next = head;
            head = newNode;
        }

        public static void main(String[] args) {
            Scanner input = new Scanner(System.in);
            System.out.print("Enter the number: ");
            int number = input.nextInt();

            for (int i = number; i >= 1; i--) {
                addToList(i);
            }

            System.out.println("Linked list: ");
            Node current = head;
            while (current != null) {
                if(current.next == null){
                    System.out.print(current.data + "");
                }else {
                    System.out.print(current.data + " -> ");
                }
                current = current.next;


            }
        }
    }
