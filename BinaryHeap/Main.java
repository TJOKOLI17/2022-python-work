package assn05;


import java.util.Arrays;

public class Main {

    public static void main(String[] args) {

//  Part 1 - Write some tests to convince yourself that your code for Part 1 is working
       /* SimpleEmergencyRoom hospital = new SimpleEmergencyRoom();
        hospital.addPatient("John", 2);
        hospital.addPatient("Sarah", 9);
        hospital.addPatient("Michael", 7);
        System.out.println(hospital);
        System.out.println(hospital.dequeue());*/

        MaxBinHeapER hospital2 = new MaxBinHeapER<>();
        hospital2.enqueue("Gina", (int)Math.pow(9, 20));
        hospital2.enqueue("David", 30*700);
        hospital2.enqueue("Selina", 1_000_000);
        hospital2.enqueue("Jorge");
        hospital2.enqueue("Pashu");
        System.out.println(hospital2);

        System.out.println("Patient's value: " + hospital2.dequeue());
        System.out.println("Patient's value: " + hospital2.dequeue());
        System.out.println("Patient's value: " + hospital2.dequeue());
        System.out.println("Patient's value: " + hospital2.dequeue());
        System.out.println("Patient's value: " + hospital2.dequeue());


       /*
        Part 2 - Write some tests to convince yourself that your code for Part 2 is working
         */





        /*
        Part 3
         */

//START OF COMMENTING OUT STUFF!!!!!🚨
//        MaxBinHeapER transfer = new MaxBinHeapER(makePatients());
//        Prioritized[] arr = transfer.getAsArray();
//        for(int i = 0; i < transfer.size(); i++) {
//            System.out.println("Value: " + arr[i].getValue()
//                    + ", Priority: " + arr[i].getPriority());
//        }
//
//        System.out.println("Patient's value: " + transfer.dequeue());
//        System.out.println("Patient's value: " + transfer.dequeue());
//        System.out.println("Patient's value: " + transfer.dequeue());
//        System.out.println("Patient's value: " + transfer.dequeue());
//        System.out.println(Arrays.toString(compareRuntimes()));
    }

    public static void fillER(MaxBinHeapER complexER) {
        for(int i = 0; i < 100000; i++) {
            complexER.enqueue(i);
        }
    }
    public static void fillER(SimpleEmergencyRoom simpleER) {
        for(int i = 0; i < 100000; i++) {
            simpleER.addPatient(i);
        }
    }

    public static Patient[] makePatients() {
        Patient[] patients = new Patient[4];
        for(int i = 0; i < 4; i++) {
            patients[i] = new Patient(i);
        }
        return patients;
    }

    public static double[] compareRuntimes() {
    	// Array which you will populate as part of Part 4
    	double[] results = new double[4];

//      ArrayList TEST:
        SimpleEmergencyRoom simplePQ = new SimpleEmergencyRoom();
        fillER(simplePQ);
        double before = System.nanoTime();
        while(simplePQ.size() > 0) {
            simplePQ.dequeue();
        }

        double after = System.nanoTime();
        results[0] = after - before;
        results[1] = (after - before)/ 100_000;

//      Binary Heap TEST:
        MaxBinHeapER binHeap = new MaxBinHeapER();
        fillER(binHeap);

        double before2 = System.nanoTime();
        while(simplePQ.size() > 0) {
            binHeap.dequeue();
        }

        double after2 = System.nanoTime();
        results[2] = after2 - before2;
        results[3] = (after2 - before2)/ 100_000;

        return results;
    }
}