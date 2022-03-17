// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Place extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("name", Value.fromString(""));
    this.set("symbol", Value.fromString(""));
    this.set("baseUri", Value.fromString(""));
    this.set("instances", Value.fromStringArray(new Array(0)));
    this.set("activationFeesItems", Value.fromBigIntArray(new Array(0)));
    this.set("activationFeesAmounts", Value.fromBigIntArray(new Array(0)));
    this.set(
      "activationRequirementsItems",
      Value.fromBigIntArray(new Array(0))
    );
    this.set(
      "activationRequirementsAmounts",
      Value.fromBigIntArray(new Array(0))
    );
    this.set("rewardItems", Value.fromBigIntArray(new Array(0)));
    this.set("rewardAmounts", Value.fromBigIntArray(new Array(0)));
    this.set("supply", Value.fromBigInt(BigInt.zero()));
    this.set("enabled", Value.fromBoolean(false));
    this.set("itemCollection", Value.fromBytes(Bytes.empty()));
    this.set("tresory", Value.fromBytes(Bytes.empty()));
    this.set("saleFeeFlat", Value.fromBigInt(BigInt.zero()));
    this.set("saleFeePercent", Value.fromBigInt(BigInt.zero()));
    this.set("claimInterval", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Place entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Place entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Place", id.toString(), this);
    }
  }

  static load(id: string): Place | null {
    return changetype<Place | null>(store.get("Place", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get name(): string {
    let value = this.get("name");
    return value!.toString();
  }

  set name(value: string) {
    this.set("name", Value.fromString(value));
  }

  get symbol(): string {
    let value = this.get("symbol");
    return value!.toString();
  }

  set symbol(value: string) {
    this.set("symbol", Value.fromString(value));
  }

  get baseUri(): string {
    let value = this.get("baseUri");
    return value!.toString();
  }

  set baseUri(value: string) {
    this.set("baseUri", Value.fromString(value));
  }

  get instances(): Array<string> {
    let value = this.get("instances");
    return value!.toStringArray();
  }

  set instances(value: Array<string>) {
    this.set("instances", Value.fromStringArray(value));
  }

  get activationFeesItems(): Array<BigInt> {
    let value = this.get("activationFeesItems");
    return value!.toBigIntArray();
  }

  set activationFeesItems(value: Array<BigInt>) {
    this.set("activationFeesItems", Value.fromBigIntArray(value));
  }

  get activationFeesAmounts(): Array<BigInt> {
    let value = this.get("activationFeesAmounts");
    return value!.toBigIntArray();
  }

  set activationFeesAmounts(value: Array<BigInt>) {
    this.set("activationFeesAmounts", Value.fromBigIntArray(value));
  }

  get activationRequirementsItems(): Array<BigInt> {
    let value = this.get("activationRequirementsItems");
    return value!.toBigIntArray();
  }

  set activationRequirementsItems(value: Array<BigInt>) {
    this.set("activationRequirementsItems", Value.fromBigIntArray(value));
  }

  get activationRequirementsAmounts(): Array<BigInt> {
    let value = this.get("activationRequirementsAmounts");
    return value!.toBigIntArray();
  }

  set activationRequirementsAmounts(value: Array<BigInt>) {
    this.set("activationRequirementsAmounts", Value.fromBigIntArray(value));
  }

  get rewardItems(): Array<BigInt> {
    let value = this.get("rewardItems");
    return value!.toBigIntArray();
  }

  set rewardItems(value: Array<BigInt>) {
    this.set("rewardItems", Value.fromBigIntArray(value));
  }

  get rewardAmounts(): Array<BigInt> {
    let value = this.get("rewardAmounts");
    return value!.toBigIntArray();
  }

  set rewardAmounts(value: Array<BigInt>) {
    this.set("rewardAmounts", Value.fromBigIntArray(value));
  }

  get supply(): BigInt {
    let value = this.get("supply");
    return value!.toBigInt();
  }

  set supply(value: BigInt) {
    this.set("supply", Value.fromBigInt(value));
  }

  get enabled(): boolean {
    let value = this.get("enabled");
    return value!.toBoolean();
  }

  set enabled(value: boolean) {
    this.set("enabled", Value.fromBoolean(value));
  }

  get itemCollection(): Bytes {
    let value = this.get("itemCollection");
    return value!.toBytes();
  }

  set itemCollection(value: Bytes) {
    this.set("itemCollection", Value.fromBytes(value));
  }

  get tresory(): Bytes {
    let value = this.get("tresory");
    return value!.toBytes();
  }

  set tresory(value: Bytes) {
    this.set("tresory", Value.fromBytes(value));
  }

  get saleFeeFlat(): BigInt {
    let value = this.get("saleFeeFlat");
    return value!.toBigInt();
  }

  set saleFeeFlat(value: BigInt) {
    this.set("saleFeeFlat", Value.fromBigInt(value));
  }

  get saleFeePercent(): BigInt {
    let value = this.get("saleFeePercent");
    return value!.toBigInt();
  }

  set saleFeePercent(value: BigInt) {
    this.set("saleFeePercent", Value.fromBigInt(value));
  }

  get claimInterval(): BigInt {
    let value = this.get("claimInterval");
    return value!.toBigInt();
  }

  set claimInterval(value: BigInt) {
    this.set("claimInterval", Value.fromBigInt(value));
  }
}

export class Instance extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("place", Value.fromString(""));
    this.set("instanceId", Value.fromBigInt(BigInt.zero()));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("lastActivationTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("lastActivationBlock", Value.fromBigInt(BigInt.zero()));
    this.set("lastClaimTimestamp", Value.fromBigInt(BigInt.zero()));
    this.set("lastClaimBlock", Value.fromBigInt(BigInt.zero()));
    this.set("tokenUri", Value.fromString(""));
    this.set("claims", Value.fromStringArray(new Array(0)));
    this.set("activations", Value.fromStringArray(new Array(0)));
    this.set("purchases", Value.fromStringArray(new Array(0)));
    this.set("price", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Instance entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Instance entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Instance", id.toString(), this);
    }
  }

  static load(id: string): Instance | null {
    return changetype<Instance | null>(store.get("Instance", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get place(): string {
    let value = this.get("place");
    return value!.toString();
  }

  set place(value: string) {
    this.set("place", Value.fromString(value));
  }

  get instanceId(): BigInt {
    let value = this.get("instanceId");
    return value!.toBigInt();
  }

  set instanceId(value: BigInt) {
    this.set("instanceId", Value.fromBigInt(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get lastActivationTimestamp(): BigInt {
    let value = this.get("lastActivationTimestamp");
    return value!.toBigInt();
  }

  set lastActivationTimestamp(value: BigInt) {
    this.set("lastActivationTimestamp", Value.fromBigInt(value));
  }

  get lastActivationBlock(): BigInt {
    let value = this.get("lastActivationBlock");
    return value!.toBigInt();
  }

  set lastActivationBlock(value: BigInt) {
    this.set("lastActivationBlock", Value.fromBigInt(value));
  }

  get lastClaimTimestamp(): BigInt {
    let value = this.get("lastClaimTimestamp");
    return value!.toBigInt();
  }

  set lastClaimTimestamp(value: BigInt) {
    this.set("lastClaimTimestamp", Value.fromBigInt(value));
  }

  get lastClaimBlock(): BigInt {
    let value = this.get("lastClaimBlock");
    return value!.toBigInt();
  }

  set lastClaimBlock(value: BigInt) {
    this.set("lastClaimBlock", Value.fromBigInt(value));
  }

  get tokenUri(): string {
    let value = this.get("tokenUri");
    return value!.toString();
  }

  set tokenUri(value: string) {
    this.set("tokenUri", Value.fromString(value));
  }

  get claims(): Array<string> {
    let value = this.get("claims");
    return value!.toStringArray();
  }

  set claims(value: Array<string>) {
    this.set("claims", Value.fromStringArray(value));
  }

  get lastActivation(): string | null {
    let value = this.get("lastActivation");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lastActivation(value: string | null) {
    if (!value) {
      this.unset("lastActivation");
    } else {
      this.set("lastActivation", Value.fromString(<string>value));
    }
  }

  get lastClaim(): string | null {
    let value = this.get("lastClaim");
    if (!value || value.kind == ValueKind.NULL) {
      return null;
    } else {
      return value.toString();
    }
  }

  set lastClaim(value: string | null) {
    if (!value) {
      this.unset("lastClaim");
    } else {
      this.set("lastClaim", Value.fromString(<string>value));
    }
  }

  get activations(): Array<string> {
    let value = this.get("activations");
    return value!.toStringArray();
  }

  set activations(value: Array<string>) {
    this.set("activations", Value.fromStringArray(value));
  }

  get purchases(): Array<string> {
    let value = this.get("purchases");
    return value!.toStringArray();
  }

  set purchases(value: Array<string>) {
    this.set("purchases", Value.fromStringArray(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }
}

export class Claim extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("place", Value.fromString(""));
    this.set("instance", Value.fromString(""));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("claimedItems", Value.fromBigIntArray(new Array(0)));
    this.set("claimedAmounts", Value.fromBigIntArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Claim entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Claim entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Claim", id.toString(), this);
    }
  }

  static load(id: string): Claim | null {
    return changetype<Claim | null>(store.get("Claim", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get place(): string {
    let value = this.get("place");
    return value!.toString();
  }

  set place(value: string) {
    this.set("place", Value.fromString(value));
  }

  get instance(): string {
    let value = this.get("instance");
    return value!.toString();
  }

  set instance(value: string) {
    this.set("instance", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get claimedItems(): Array<BigInt> {
    let value = this.get("claimedItems");
    return value!.toBigIntArray();
  }

  set claimedItems(value: Array<BigInt>) {
    this.set("claimedItems", Value.fromBigIntArray(value));
  }

  get claimedAmounts(): Array<BigInt> {
    let value = this.get("claimedAmounts");
    return value!.toBigIntArray();
  }

  set claimedAmounts(value: Array<BigInt>) {
    this.set("claimedAmounts", Value.fromBigIntArray(value));
  }
}

export class Purchase extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("place", Value.fromString(""));
    this.set("instance", Value.fromString(""));
    this.set("seller", Value.fromBytes(Bytes.empty()));
    this.set("buyer", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("price", Value.fromBigInt(BigInt.zero()));
    this.set("feePercent", Value.fromBigInt(BigInt.zero()));
    this.set("feeFlat", Value.fromBigInt(BigInt.zero()));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Purchase entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Purchase entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Purchase", id.toString(), this);
    }
  }

  static load(id: string): Purchase | null {
    return changetype<Purchase | null>(store.get("Purchase", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get place(): string {
    let value = this.get("place");
    return value!.toString();
  }

  set place(value: string) {
    this.set("place", Value.fromString(value));
  }

  get instance(): string {
    let value = this.get("instance");
    return value!.toString();
  }

  set instance(value: string) {
    this.set("instance", Value.fromString(value));
  }

  get seller(): Bytes {
    let value = this.get("seller");
    return value!.toBytes();
  }

  set seller(value: Bytes) {
    this.set("seller", Value.fromBytes(value));
  }

  get buyer(): Bytes {
    let value = this.get("buyer");
    return value!.toBytes();
  }

  set buyer(value: Bytes) {
    this.set("buyer", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get price(): BigInt {
    let value = this.get("price");
    return value!.toBigInt();
  }

  set price(value: BigInt) {
    this.set("price", Value.fromBigInt(value));
  }

  get feePercent(): BigInt {
    let value = this.get("feePercent");
    return value!.toBigInt();
  }

  set feePercent(value: BigInt) {
    this.set("feePercent", Value.fromBigInt(value));
  }

  get feeFlat(): BigInt {
    let value = this.get("feeFlat");
    return value!.toBigInt();
  }

  set feeFlat(value: BigInt) {
    this.set("feeFlat", Value.fromBigInt(value));
  }
}

export class Activation extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));

    this.set("place", Value.fromString(""));
    this.set("instance", Value.fromString(""));
    this.set("owner", Value.fromBytes(Bytes.empty()));
    this.set("timestamp", Value.fromBigInt(BigInt.zero()));
    this.set("block", Value.fromBigInt(BigInt.zero()));
    this.set("paidItems", Value.fromBigIntArray(new Array(0)));
    this.set("paidAmounts", Value.fromBigIntArray(new Array(0)));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Activation entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        "Cannot save Activation entity with non-string ID. " +
          'Considering using .toHex() to convert the "id" to a string.'
      );
      store.set("Activation", id.toString(), this);
    }
  }

  static load(id: string): Activation | null {
    return changetype<Activation | null>(store.get("Activation", id));
  }

  get id(): string {
    let value = this.get("id");
    return value!.toString();
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get place(): string {
    let value = this.get("place");
    return value!.toString();
  }

  set place(value: string) {
    this.set("place", Value.fromString(value));
  }

  get instance(): string {
    let value = this.get("instance");
    return value!.toString();
  }

  set instance(value: string) {
    this.set("instance", Value.fromString(value));
  }

  get owner(): Bytes {
    let value = this.get("owner");
    return value!.toBytes();
  }

  set owner(value: Bytes) {
    this.set("owner", Value.fromBytes(value));
  }

  get timestamp(): BigInt {
    let value = this.get("timestamp");
    return value!.toBigInt();
  }

  set timestamp(value: BigInt) {
    this.set("timestamp", Value.fromBigInt(value));
  }

  get block(): BigInt {
    let value = this.get("block");
    return value!.toBigInt();
  }

  set block(value: BigInt) {
    this.set("block", Value.fromBigInt(value));
  }

  get paidItems(): Array<BigInt> {
    let value = this.get("paidItems");
    return value!.toBigIntArray();
  }

  set paidItems(value: Array<BigInt>) {
    this.set("paidItems", Value.fromBigIntArray(value));
  }

  get paidAmounts(): Array<BigInt> {
    let value = this.get("paidAmounts");
    return value!.toBigIntArray();
  }

  set paidAmounts(value: Array<BigInt>) {
    this.set("paidAmounts", Value.fromBigIntArray(value));
  }
}