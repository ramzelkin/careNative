//
//  TextRecognition.swift
//  myCareNative
//
//  Created by Vika on 02/08/2024.
//

import Foundation
import MLKitTextRecognition
import MLKitVision
import RCTTypeSafety

final class TextRecognition {
  
  enum Error: Swift.Error {
    case noImage
    case processing(error: Swift.Error)
    case unexpectedNil
  }
  
  
  
  func recognizeText(on imageURL: String, completion: @escaping ([String]?, Swift.Error?) -> Void) {
    let a =
    // When using Latin script recognition SDK
    let latinOptions = TextRecognizerOptions()
    let latinTextRecognizer = TextRecognizer.textRecognizer(options: latinOptions)

    guard let image = UIImage(contentsOfFile: imageURL) else {
      completion(nil, Error.noImage)
      return
    }
    let visionImage = VisionImage(image: image)
    
    visionImage.orientation = image.imageOrientation

    latinTextRecognizer.process(visionImage) { text, error in
      if let error {
        completion(nil, Error.processing(error: error))
        return
      }
      
      guard let text else {
        completion(nil, Error.unexpectedNil)
        return
      }
      
      completion(text.blocks.map { $0.text }, nil)
    }
  }
}
