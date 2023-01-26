fn main(){
  let logical = true;

  let a_float: f64 = 1.0;
  let an_integer = 5i32;

  let default_float = 3.0; // f64
  let default_integer = 7; // i32

  let mut inferred_type = 12; // i64 inferred from next line
  inferred_type = 4294967296i64;

  let mut mutable = 12 // Mutable i32
  mutable = 21;

  // Error!
  mutable = true;

  // overwritten with shadowing
  let mutable = true;
}