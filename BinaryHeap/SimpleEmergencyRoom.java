package assn05;


import java.util.ArrayList;
import java.util.List;

public class SimpleEmergencyRoom {
    private List<Patient> patients;

    public SimpleEmergencyRoom() {
        patients = new ArrayList<>();
    }

    // TODO: dequeue
    public Patient dequeue() {
        int highest = 0;
        Patient patient;

        if (patients.size() == 0) {
            return null;
        } else {
            for (int i = 0; i < patients.size(); i++) {
                if (patients.get(highest).getPriority().compareTo(patients.get(i).getPriority()) < 0){
                    highest = i;
                }
            }
        }
        patient = patients.get(highest);
        patients.remove(patients.get(highest));
        return patient;
    }

    public String toString() {
        String str = "Emergency Room Patients:\n";
        for (int i = 0; i < patients.size(); i++) {
            str += (i + 1) + ". " +  patients.get(i).getValue() +
                    " " + "(Priority " + patients.get(i).getPriority() + ")" + "\n";
        }
        return str;
    }


    public <V, P> void addPatient(V value, P priority) {
        Patient patient = new Patient(value, (Integer) priority);
        patients.add(patient);
    }

    public <V> void addPatient(V value) {
        Patient patient = new Patient(value);
        patients.add(patient);
    }

    public List getPatients() {
        return patients;
    }

    public int size() {
        return patients.size();
    }

}
