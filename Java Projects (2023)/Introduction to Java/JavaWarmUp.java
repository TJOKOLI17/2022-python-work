package assn02;
import java.util.Scanner;
public class JavaWarmUp {

    public static void main(String[] args) {
        int num;
        String info;

//      CREATING SEPARATE ARRAYS FOR USER INPUT
        Scanner in = new Scanner(System.in);
        System.out.print("Enter number of items: ");
        num = in.nextInt();
        String[] dates = new String[num];
        String[] hh_mm = new String[num];
        String[] cats = new String[num];
        String[] raw_fees = new String[num];
        String[] raw_quantity = new String[num];
        String[] raw_times = new String[num];
        String[] raw_cost = new String[num];


//      SEPARATING USER INPUT INTO SPECIFIED ARRAYS
        for(int i = 0; i < num; i++){
            System.out.print("Item #" + (i + 1) + ": (MM/DD/YY, HH:MM, Category, Fee, Quantity, Time, Cost): ");
            dates[i] = in.next();
            hh_mm[i] = in.next();
            cats[i] = in.next();
            raw_fees[i] = in.next();
            raw_quantity[i] = in.next();
            raw_times[i] = in.next();
            raw_cost[i] = in.next();
        }

//      CONVERTING CATEGORIES TO RIGHT TYPE
        Double[] fees = new Double[num];
        for(int i = 0; i < num; i++) {
            fees[i] = Double.parseDouble(raw_fees[i]);
        }

        Double[] quantity = new Double[num];
        for(int i = 0; i < num; i++) {
            quantity[i] = Double.parseDouble(raw_quantity[i]);
        }

        Double[] times = new Double[num];
        for(int i = 0; i < num; i++) {
            times[i] = Double.parseDouble(raw_times[i]);
        }

        Double[] cost = new Double[num];
        for(int i = 0; i < num; i++){
            cost[i] = Double.parseDouble(raw_cost[i]);
        }

//      GETTING TOTAL QUANTITY FOR ALL CATEGORIES
        int p_quantity = 0;
        for (int i = 0; i < cats.length; i++) {
            if (cats[i].equals("phone")) {
                p_quantity += quantity[i];
            }
        }

        int l_quantity = 0;
        for (int i = 0; i < cats.length; i++) {
            if (cats[i].equals("laptop")) {
                l_quantity += quantity[i];
            }
        }

        int sw_quantity = 0;
        for (int i = 0; i < cats.length; i++) {
            if (cats[i].equals("smart_watch")) {
                sw_quantity += quantity[i];
            }
        }

//      CALCULATING HIGHEST AND LOWEST PER UNIT ASSEMBLING FEE
//      TODO #
        double max_price = fees[0];
        String max_date = "";
        String max_time = "";
        String max_cat = "";

        for (int i = 0; i < fees.length; i++) {
            if(fees[i] >= max_price) {
                max_price = fees[i];
                max_date = dates[i];
                max_time = hh_mm[i];
                max_cat = cats[i];

            }
        }

        double min_price = fees[0];
        String min_date = "";
        String min_time = "";
        String min_cat = "";

        for (int i = 0; i < fees.length; i++) {
            if(fees[i] <= min_price) {
                min_price = fees[i];
                min_date = dates[i];
                min_time = hh_mm[i];
                min_cat = cats[i];

            }
        }

//      CALCULATING AVERAGE ASSEMBLING FEE
        double p_total_fee = 0;
        double l_total_fee = 0;
        double sw_total_fee = 0;

        for (int i = 0; i < cats.length; i++) {
            switch (cats[i]) {
                case "phone" -> {
                    double key = (fees[i] * quantity[i]);
                    p_total_fee += key;
                }
                case "laptop" -> {
                    double key1 = (fees[i] * quantity[i]);
                    l_total_fee += key1;
                }
                case "smart_watch" -> {
                    double key2 = (fees[i] * quantity[i]);
                    sw_total_fee += key2;
                }
            }
        }
        double p_avg_fee = (p_total_fee / p_quantity);
        double l_avg_fee = (l_total_fee / l_quantity);
        double sw_avg_fee = (sw_total_fee / sw_quantity);

//      CALCULATING AVERAGE NET PROFIT
        double p_total_cost = 0;
        double l_total_cost = 0;
        double sw_total_cost = 0;
        for (int i = 0; i < cats.length; i++) {
            switch (cats[i]) {
                case "phone" -> {
                    double costs = (times[i] * 16);
                    costs += cost[i];
                    p_total_cost += costs;
                }
                case "laptop" -> {
                    double costs = (times[i] * 16);
                    costs += cost[i];
                    l_total_cost += costs;
                }
                case "smart_watch" -> {
                    double costs = (times[i] * 16);
                    costs += cost[i];
                    sw_total_cost += costs;
                }
            }
        }

        double p_avg_profit = ((p_total_fee - p_total_cost) / p_quantity);
        double l_avg_profit = ((l_total_fee - l_total_cost) / l_quantity);
        double sw_avg_profit = ((sw_total_fee - sw_total_cost) / sw_quantity);

//      PRINTING HIGHEST AND LOWEST PER UNIT ASSEMBLING FEE
        System.out.println("Highest per unit assembling fee:");
        System.out.println("\tWhen: " + max_date + " " + max_time);
        System.out.println("\tCategory: " + max_cat);
        System.out.println("\tPrice: " + max_price);

        System.out.println("Lowest per unit assembling fee:");
        System.out.println("\tWhen: " + min_date + " " + min_time);
        System.out.println("\tCategory: " + min_cat);
        System.out.println("\tPrice: " + min_price);
//
//      PRINTING STATISTICS
        System.out.println("Statistic of phone");
        System.out.println("\tQuantity: " + p_quantity);
        System.out.printf("\tAverage Assembling fee: %.2f\n", p_avg_fee);
        System.out.printf("\tAverage Net Profit: %.2f\n", p_avg_profit);

        System.out.println("Statistic of laptop");
        System.out.println("\tQuantity: " + l_quantity);
        System.out.printf("\tAverage Assembling fee: %.2f\n", l_avg_fee);
        System.out.printf("\tAverage Net Profit: %.2f\n", l_avg_profit);

        System.out.println("Statistic of smart_watch");
        System.out.println("\tQuantity: " + sw_quantity);
        System.out.printf("\tAverage Assembling fee: %.2f\n", sw_avg_fee);
        System.out.printf("\tAverage Net Profit: %.2f\n", sw_avg_profit);
        }
}
