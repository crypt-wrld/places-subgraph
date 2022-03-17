import { Address, BigInt } from "@graphprotocol/graph-ts"
import {
  OnPlaceAdd,
  OnPlaceRemove
} from "../generated/Buildings/Buildings"
import { Place } from "../generated/schema"
import { PlaceTemplate } from "../generated/templates"
import { Place as PlaceContract } from "../generated/Buildings/Place"

export function handleOnPlaceAdd(event: OnPlaceAdd): void {
  var placeAddress = event.params.placeAddress;
  var placeId = placeAddress.toHex();
  var place = Place.load(placeId);
  if (place != null)
  {
    place.enabled = true;
    place.save();
    return;
  }
  var placeContract = PlaceContract.bind(placeAddress);
  place = createPlace(placeId, placeContract);
  PlaceTemplate.create(placeAddress);
  place.save();
}

export function handleOnPlaceRemove(event: OnPlaceRemove): void {
  var placeId = event.params.placeAddress.toHex();
  var place = Place.load(placeId);
  if (place == null)
    return;
  place.enabled = false;
  place.save();
}

function createPlace(id : string, placeContract: PlaceContract) : Place {
  var place =  new Place(id);
  place.name = placeContract.name();
  place.symbol = placeContract.symbol();
  place.baseUri = placeContract.baseUri();
  place.saleFeeFlat = placeContract.feeFlat();
  place.saleFeePercent = placeContract.feePercent();
  place.instances = new Array<string>();
  place.activationFeesAmounts = new Array<BigInt>();
  place.activationFeesItems = new Array<BigInt>();
  place.rewardAmounts = new Array<BigInt>();
  place.rewardItems = new Array<BigInt>();
  place.activationRequirementsAmounts = new Array<BigInt>();
  place.activationRequirementsItems = new Array<BigInt>(); 
  place.supply = BigInt.fromI32(0);
  place.claimInterval = placeContract.claimInterval();
  place.itemCollection = placeContract.gameItems();
  place.tresory = placeContract.treasury();
  place.enabled = true;
  return place;
}
