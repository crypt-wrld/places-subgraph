// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  Address,
  DataSourceTemplate,
  DataSourceContext
} from "@graphprotocol/graph-ts";

export class PlaceTemplate extends DataSourceTemplate {
  static create(address: Address): void {
    DataSourceTemplate.create("PlaceTemplate", [address.toHex()]);
  }

  static createWithContext(address: Address, context: DataSourceContext): void {
    DataSourceTemplate.createWithContext(
      "PlaceTemplate",
      [address.toHex()],
      context
    );
  }
}
