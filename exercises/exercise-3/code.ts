import { AssertAssignable } from "../util";

/**
 * We're going to help the Monster Foodies Truck by writing 
 * a function that will price out their food orders.
 * 
 * The Monster Foodies Truck takes orders on paper slips. 
 * We'll represent items from these slips as a PaperLineItem, 
 * which is simply a collection of properties. 
 */
type PaperLineItem = {
  type: EntreeType;
  protein: Protein;
  awesomeSauce: boolean;
  extraTaco?: boolean;
  salsa?: boolean;
  toppings?: Topping[];
};
/**
 * The trouble with this approach is that PaperLineItem doesn't 
 * constrain its values at all- we could have a sandwich with an 
 * extra taco! We wouldn't want to price an order like that.
 * 
 * We could work around this problem by writing a bunch of 
 * checks that validate that we don't have an extra taco with
 * a sandwich, or a sandwich with salsa, and so on, OR:
 * We could use TypeScript to make invalid orders unrepresentable 
 * in our code!
 *
 * ======================================================
 * TODO: Update the LineItem type to represent an order from the
 * Monster Foodies Truck. Make sure that LineItem only represents 
 * valid orders!
 * ======================================================*/
export type LineItem = {};

/**
 * We don't want to make the Monster Foodies Truck change their 
 * order slips, so make sure that you use the same properties 
 * as PaperLineItem. This AssertAssignable line will have a 
 * type error if your line item is not structurally compatible 
 * with PaperLineItem.
 */
type _t1 = AssertAssignable<PaperLineItem, LineItem>;

export interface Order {
  lineItems: LineItem[];
}

/*
 * ======================================================
 * TODO: Implement priceOrder.
 * ======================================================*/
export function priceOrder(order: Order): number {
  return 1;
}

/* Monster Foodies Food Truck Menu
Taco....................$5
  Protein
    Chicken
    BBQ jackfruit
    Carnitas (+$2)
    Salsa (+$0.50)
  Add a second taco for +$3 (+$4 for Carnitas)
Sandwich................$4
  Protein
    Chicken
    BBQ Jackfruit
    Portabello Cap (+$2)
  Optional 1 topping, extra toppings +$0.50
    Cheese
    Lettuce
    Tomato
Add AwesomeSauce to anything for $1!
*/

export type Protein =
  | "chicken" // 🐓
  | "jackfruit" // 🍈

  // Pricey Proteins
  | "carnitas" // 🐖
  | "portabelloCap"; // 🍄

export type EntreeType =
  | "taco" // 🌮
  | "sandwich"; // 🍞

export type Topping =
  | "cheese" // 🧀
  | "lettuce" // 🥗
  | "tomato"; // 🍅



