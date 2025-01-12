import { createContext, Dispatch, SetStateAction } from "react";

interface TripDataContextType {
  tripData: any;  // Consider specifying a more precise type instead of 'any' if possible
  setTripData: Dispatch<SetStateAction<any>>;
}

export const CreateTripContext = createContext<TripDataContextType | null>(null);
