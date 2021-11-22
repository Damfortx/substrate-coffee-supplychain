export default {
  "Address": "MultiAddress",
 "LookupSource": "MultiAddress",
  "Signature": "Vec<u8>",
  "Attribute": {
    "name": "Vec<u8>",
    "value": "Vec<u8>",
    "validity": "BlockNumber",
    "creation": "Moment",
    "nonce": "u64"
  },
  "AttributeTransaction": {
    "signature": "Signature",
    "name": "Vec<u8>",
    "value": "Vec<u8>",
    "validity": "u32",
    "signer": "AccountId",
    "identity": "AccountId"
  },
  "PropName": "Vec<u8>",
  "PropValue": "Vec<u8>",
  "ProductProperty": {
    "name": "PropName",
    "value": "PropValue"
  },
  "ProductId": "Vec<u8>",
  "Product": {
    "id": "ProductId",
    "owner": "AccountId",
    "props": "Option<Vec<ProductProperty>>",
    "registered": "Moment"
  },
  "Identifier": "Vec<u8>",
  "Decimal": "i32",
  "ShipmentId": "Identifier",
  "ShippingEventIndex": "u128",
  "DeviceId": "Identifier",
  "ShipmentStatus": {
    "_enum": [
      "Pending",
      "InTransit",
      "Delivered"
    ]
  },
  "Shipment": {
    "id": "ShipmentId",
    "owner": "AccountId",
    "status": "ShipmentStatus",
    "products": "Vec<ProductId>",
    "registered": "Moment",
    "delivered": "Option<Moment>"
  },
  "ShippingOperation": {
    "_enum": [
      "Pickup",
      "Scan",
      "Deliver"
    ]
  },
  "ShippingEventType": {
    "_enum": [
      "ShipmentRegistration",
      "ShipmentPickup",
      "ShipmentScan",
      "ShipmentDeliver"
    ]
  },
  "ShippingEvent": {
    "event_type": "ShippingEventType",
    "shipment_id": "ShipmentId",
    "location": "Option<ReadPoint>",
    "readings": "Vec<Reading<Moment>>",
    "timestamp": "Moment"
  },
  "ReadPoint": {
    "latitude": "Decimal",
    "longitude": "Decimal"
  },
  "ReadingType": {
    "_enum": [
      "Humidity",
      "Pressure",
      "Shock",
      "Tilt",
      "Temperature",
      "Vibration"
    ]
  },
  "Reading": {
    "device_id": "DeviceId",
    "reading_type": "ReadingType",
    "timestamp": "Moment",
    "value": "Decimal"
  },
  "Permission": {
    "_enum":{"Execute":1,"Manage":2}
  },
  "Role": {
    "pallet": "Vec<u8>",
    "permission": "Permission"
  },
  "Keys": "SessionKeys2"
};
