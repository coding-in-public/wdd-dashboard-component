export type Transaction = {
  id: string;
  status: "Completed" | "Pending" | "Canceled";
  payment_deets: {
    name: string;
    number: number;
    type: string;
    amt: number;
    date: string;
    vender: string;
  };
};
