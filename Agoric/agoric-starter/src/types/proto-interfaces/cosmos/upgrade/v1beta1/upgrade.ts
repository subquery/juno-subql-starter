import { Any, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Long } from "../../../helpers";
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   */
  /** @deprecated */
  time: Date;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height: Long;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   */
  /** @deprecated */
  upgradedClientState: Any;
}
export interface PlanProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.Plan";
  value: Uint8Array;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanAmino {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string;
  /**
   * Deprecated: Time based upgrades have been deprecated. Time based upgrade logic
   * has been removed from the SDK.
   * If this field is not empty, an error will be thrown.
   */
  /** @deprecated */
  time?: Date;
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height: string;
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string;
  /**
   * Deprecated: UpgradedClientState field has been deprecated. IBC upgrade logic has been
   * moved to the IBC module in the sub module 02-client.
   * If this field is not empty, an error will be thrown.
   */
  /** @deprecated */
  upgraded_client_state?: AnyAmino;
}
export interface PlanAminoMsg {
  type: "cosmos-sdk/Plan";
  value: PlanAmino;
}
/** Plan specifies information about a planned upgrade and when it should occur. */
export interface PlanSDKType {
  name: string;
  /** @deprecated */
  time: Date;
  height: Long;
  info: string;
  /** @deprecated */
  upgraded_client_state: AnySDKType;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 */
/** @deprecated */
export interface SoftwareUpgradeProposal {
  title: string;
  description: string;
  plan: Plan;
}
export interface SoftwareUpgradeProposalProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.SoftwareUpgradeProposal";
  value: Uint8Array;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 */
/** @deprecated */
export interface SoftwareUpgradeProposalAmino {
  title: string;
  description: string;
  plan?: PlanAmino;
}
export interface SoftwareUpgradeProposalAminoMsg {
  type: "cosmos-sdk/SoftwareUpgradeProposal";
  value: SoftwareUpgradeProposalAmino;
}
/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgSoftwareUpgrade.
 */
/** @deprecated */
export interface SoftwareUpgradeProposalSDKType {
  title: string;
  description: string;
  plan: PlanSDKType;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 */
/** @deprecated */
export interface CancelSoftwareUpgradeProposal {
  title: string;
  description: string;
}
export interface CancelSoftwareUpgradeProposalProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.CancelSoftwareUpgradeProposal";
  value: Uint8Array;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 */
/** @deprecated */
export interface CancelSoftwareUpgradeProposalAmino {
  title: string;
  description: string;
}
export interface CancelSoftwareUpgradeProposalAminoMsg {
  type: "cosmos-sdk/CancelSoftwareUpgradeProposal";
  value: CancelSoftwareUpgradeProposalAmino;
}
/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 * Deprecated: This legacy proposal is deprecated in favor of Msg-based gov
 * proposals, see MsgCancelUpgrade.
 */
/** @deprecated */
export interface CancelSoftwareUpgradeProposalSDKType {
  title: string;
  description: string;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersion {
  /** name of the app module */
  name: string;
  /** consensus version of the app module */
  version: Long;
}
export interface ModuleVersionProtoMsg {
  typeUrl: "/cosmos.upgrade.v1beta1.ModuleVersion";
  value: Uint8Array;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersionAmino {
  /** name of the app module */
  name: string;
  /** consensus version of the app module */
  version: string;
}
export interface ModuleVersionAminoMsg {
  type: "cosmos-sdk/ModuleVersion";
  value: ModuleVersionAmino;
}
/**
 * ModuleVersion specifies a module and its consensus version.
 * 
 * Since: cosmos-sdk 0.43
 */
export interface ModuleVersionSDKType {
  name: string;
  version: Long;
}