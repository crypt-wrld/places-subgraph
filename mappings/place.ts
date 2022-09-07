import { Address, BigInt, Bytes, log } from "@graphprotocol/graph-ts"
import { concat } from "@graphprotocol/graph-ts/helper-functions";
import {
  OnSaleFeeFlatChange,
  OnSaleFeePercentChange,
  OnSaleOfferCreate,
  OnSaleComplete,
  OnSaleOfferRevoke,
  OnActivationFeesChange,
  OnActivationRequirementsChange,
  OnClaimReward,
  OnGameItemsAddressChange,
  OnInstanceActivate,
  OnRewardsChange,
  OnTreasuryAddressChange,
  OnClaimIntervalChanged,
  Transfer
} from "../generated/Buildings/Place"
import { Place as PlaceContract } from "../generated/Buildings/Place"
import { Instance, Place, Claim, Activation, Purchase } from "../generated/schema"


export function handleOnActivationFeesChange(
  event: OnActivationFeesChange
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.activationFeesItems = event.params.tokenIds;
  place.activationFeesAmounts = event.params.amounts;
  place.save();
}

export function handleOnActivationRequirementsChange(
  event: OnActivationRequirementsChange
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.activationRequirementsItems = event.params.tokenIds;
  place.activationRequirementsAmounts = event.params.amounts;
  place.save();
}

export function getInstanceId(placeAddress: Address, instance: BigInt): string {
  return concat(placeAddress, Bytes.fromBigInt(instance)).toHex();
}

export function getClaimId(instanceId: string, blockNumber: BigInt): string {
  return concat(Bytes.fromHexString(instanceId), Bytes.fromBigInt(blockNumber)).toHex();
}


export function getActivationId(instanceId: string, blockNumber: BigInt): string {
  return concat(Bytes.fromHexString(instanceId), Bytes.fromBigInt(blockNumber)).toHex();
}

export function getPurchaseId(instanceId: string, blockNumber: BigInt): string {
  return concat(Bytes.fromHexString(instanceId), Bytes.fromBigInt(blockNumber)).toHex();
}


export function handleOnClaimReward(event: OnClaimReward): void {
  var placeId = event.address.toHex();
  var instanceId = getInstanceId(event.address, event.params.instaceId);
  var instance = Instance.load(instanceId) as Instance;
  var claimId = getClaimId(instanceId, event.block.number);
  var claim = Claim.load(claimId);
  if (claim) return;
  claim = new Claim(claimId);
  claim.place = placeId;
  claim.instance = instanceId;
  claim.claimedAmounts = event.params.amounts;
  claim.claimedItems = event.params.tokenIds;
  claim.owner = instance.owner;
  claim.block = event.block.number;
  claim.timestamp = event.block.timestamp;
  instance.lastClaimBlock = event.block.number;
  instance.lastClaimTimestamp = event.block.timestamp;
  var claims = instance.claims;
  claims.push(claimId);
  instance.lastClaim = claimId;
  instance.claims = claims;
  instance.save();
  claim.save();
}

export function handleOnGameItemsAddressChange(
  event: OnGameItemsAddressChange
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.itemCollection = event.params.gameItemsAddress;
  place.save();
}

export function handleOnInstanceActivate(event: OnInstanceActivate): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  var instanceId = getInstanceId(event.address, event.params.instanceId);
  var instance = Instance.load(instanceId) as Instance;
  var activationId = getActivationId(instanceId, event.block.number);
  var activation = Activation.load(activationId);
  if (activation) return;
  activation = new Activation(activationId);
  activation.place = instance.place;
  activation.instance = instanceId;
  activation.owner = instance.owner;
  activation.paidItems = place.activationFeesItems;
  activation.paidAmounts = place.activationFeesAmounts;
  activation.block = event.block.number;
  activation.timestamp = event.block.timestamp;
  activation.save();
  instance.lastActivation = activationId;
  var activations = instance.activations;
  activations.push(activationId);
  instance.activations = activations;
  instance.lastActivationBlock = event.block.number;
  instance.lastActivationTimestamp = event.block.timestamp;
  instance.save();
}

export function handleOnRewardsChange(event: OnRewardsChange): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.rewardAmounts = event.params.rewardAmounts;
  place.rewardItems = event.params.tokenIds;
  place.save();
}

export function handleOnTreasuryAddressChange(
  event: OnTreasuryAddressChange
): void {
  log.warning("Treasury change test : " + event.params.treasuryAddress.toHex(), new Array<string>());
  var placeContract = PlaceContract.bind(event.address);
  log.warning("Treasury change test2 : " + placeContract.treasury().toHex(), new Array<string>());
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.tresory = event.params.treasuryAddress;
  place.save();
}

export function createInstance(id: string, placeAddress: Address, instanceId: BigInt): Instance {
  var place = Place.load(placeAddress.toHex()) as Place;
  var instance = new Instance(id);
  instance.place = placeAddress.toHex();
  instance.instanceId = instanceId;
  var placeContract = PlaceContract.bind(placeAddress);
  instance.tokenUri = placeContract.tokenURI(instanceId);
  instance.claims = new Array<string>();
  instance.activations = new Array<string>();
  instance.purchases = new Array<string>();
  instance.price = BigInt.fromI32(0);
  if (instanceId >= place.supply)
    place.supply = instanceId.plus(BigInt.fromI32(0));
  var instances = place.instances
  instances.push(id);
  place.instances = instances;
  place.save();
  return instance;
}

export function handleTransfer(event: Transfer): void {
  log.warning("Token transfer from " + event.params.from.toHex() + " to " + event.params.to.toHex() + "token id : " + event.params.tokenId.toString(), new Array<string>());
  var instanceId = getInstanceId(event.address, event.params.tokenId);
  var instance = (Instance.load(instanceId) || createInstance(instanceId, event.address, event.params.tokenId)) as Instance;
  instance.owner = event.params.to;
  instance.save();
}

export function handleOnSaleFeeFlatChange(
  event: OnSaleFeeFlatChange
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.saleFeeFlat = event.params.value;
  place.save();
}

export function handleOnSaleFeePercentChange(
  event: OnSaleFeePercentChange
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.saleFeePercent = event.params.value;
  place.save();
}

export function handleOnSaleOfferCreate(
  event: OnSaleOfferCreate
): void {
  var instanceId = getInstanceId(event.address, event.params.instanceId);
  var instance = Instance.load(instanceId) as Instance;
  instance.price = event.params.price;
  instance.save();
}


export function handleOnSaleComplete(
  event: OnSaleComplete
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  var instanceId = getInstanceId(event.address, event.params.instanceId);
  var purchaseId = getPurchaseId(instanceId, event.block.number);
  var purchase = Purchase.load(purchaseId);
  if (purchase) return;
  var instance = Instance.load(instanceId) as Instance;
  purchase = new Purchase(purchaseId);
  purchase.buyer = event.transaction.from;
  purchase.seller = instance.owner;
  purchase.price = instance.price;
  purchase.feeFlat = place.saleFeeFlat;
  purchase.feePercent = place.saleFeePercent;
  purchase.instance = instanceId;
  purchase.block = event.block.number;
  purchase.timestamp = event.block.timestamp;
  purchase.place = placeId;
  var purchases = instance.purchases;
  purchases.push(purchaseId);
  instance.price = BigInt.fromI32(0);
  instance.save();
  purchase.save();
}

export function handleOnSaleOfferRevoke(
  event: OnSaleOfferRevoke
): void {
  var instanceId = getInstanceId(event.address, event.params.instanceId);
  var instance = Instance.load(instanceId) as Instance;
  instance.price = BigInt.fromI32(0);
  instance.save();
}

export function handleOnClaimIntervalChanged(
  event: OnClaimIntervalChanged
): void {
  var placeId = event.address.toHex();
  var place = Place.load(placeId) as Place;
  place.claimInterval = event.params.interval;
  place.save();
}
