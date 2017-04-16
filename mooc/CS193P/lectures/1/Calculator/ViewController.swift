//
//  ViewController.swift
//  Calculator
//
//  Created by Raghib Hasan on 4/16/17.
//  Copyright © 2017 Raghib Hasan. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    // instance variable (properties), ! - means unwrap, type is Optional, 
    // UILabel is initialized with nil
    @IBOutlet weak var display: UILabel!
    
    // infered no need to specify Bool type
    var userIsInTheMiddleOfTyping = false
    
    // methods (functions)
    @IBAction func touchDigit(_ sender: UIButton) {
        let digit = sender.currentTitle!
    
        if userIsInTheMiddleOfTyping {
            let textcurrentlyInDisplay = display.text!
            display.text = textcurrentlyInDisplay + digit
        }else {
            display.text = digit
            userIsInTheMiddleOfTyping = true
        }
     
    }
    
    // Computed property
    var displayValue: Double {
        get {
            return Double(display.text!)!
        }
        
        set {
            display.text = String(newValue)
        }
    }
    
    @IBAction func performOperation(_ sender: UIButton) {
        userIsInTheMiddleOfTyping = false
        if let mathematicalSymbol = sender.currentTitle {
            switch mathematicalSymbol {
            case "π" :
                displayValue = Double.pi
            case "√":
                displayValue = sqrt(displayValue)
            default:
                break
            }
        }
    }
}

