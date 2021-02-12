
    // ----------------------------------------------
    // generated by create-contract-cli from usdnear-stable/usdnear/src/lib.rs
    // ---------------------------------------------

    const color = require("./util/color.js");
    const nearCli = require("./util/SpawnNearCli.js");
    const options = require("./CLIOptions.js");
    const cliConfig = require("./CLIConfig.js");

    // name of this script
    const nickname = cliConfig.nickname;

    // one function for each pub fn in the contract
    // get parameters by consuming from CommandLineParser
    class ContractAPI {

        // this.view helper function
        _view(command/*:string*/, fnJSONParams/*?:any*/) /*:string*/ {
            return nearCli.view(cliConfig.contractAccount, command, fnJSONParams, options)
        }
        // this.call helper function
        _call(command/*:string*/, fnJSONParams/*?:any*/) /*:string*/ {
            return nearCli.call(cliConfig.contractAccount, command, fnJSONParams, options)
        }
    
    
  new_HELP(){ return `
   Initializes UsdNearStableCoin contract.
   - 'owner_account_id' - the account ID of the owner.  Only this account can call owner's methods on this contract.
  #[init]
  
  usage:
  > usdnear new { owner_account_id: AccountId, treasury_account_id: AccountId, operator_account_id: AccountId, current_stnear_price: U128String }
  `};
  
  new(a /*:CommandLineArgs*/) /*:void*/{
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("{ account:userAccount, amount:xxN }")
    
    //get fn arguments as JSON
    const fnJSONParams = a.consumeJSON("{ owner_account_id: AccountId, treasury_account_id: AccountId, operator_account_id: AccountId, current_stnear_price: U128String }")
    
    a.noMoreArgs() // no more positional args should remain
    
    this._call("new",fnJSONParams)
    
  }
  
  withdraw_stnear_HELP(){ return `
   Withdraws collateral(stNEAR) from this contract to the user's META_POOL_STNEAR_CONTRACT account
  
  usage:
  > usdnear withdraw_stnear { amount: U128String }
  `};
  
  withdraw_stnear(a /*:CommandLineArgs*/) /*:void*/{
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("{ account:userAccount, amount:xxN }")
    
    //get fn arguments as JSON
    const fnJSONParams = a.consumeJSON("{ amount: U128String }")
    
    a.noMoreArgs() // no more positional args should remain
    
    this._call("withdraw_stnear",fnJSONParams)
    
  }
  
  take_loan_HELP(){ return `
  
  usage:
  > usdnear take_loan { usdnear_amount: U128String }
  `};
  
  take_loan(a /*:CommandLineArgs*/) /*:void*/{
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("{ account:userAccount, amount:xxN }")
    
    //get fn arguments as JSON
    const fnJSONParams = a.consumeJSON("{ usdnear_amount: U128String }")
    
    a.noMoreArgs() // no more positional args should remain
    
    this._call("take_loan",fnJSONParams)
    
  }
  
  repay_loan_HELP(){ return `
  
  usage:
  > usdnear repay_loan { usdnear_amount: U128String }
  `};
  
  repay_loan(a /*:CommandLineArgs*/) /*:void*/{
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("{ account:userAccount, amount:xxN }")
    
    //get fn arguments as JSON
    const fnJSONParams = a.consumeJSON("{ usdnear_amount: U128String }")
    
    a.noMoreArgs() // no more positional args should remain
    
    this._call("repay_loan",fnJSONParams)
    
  }
  
  liquidate_HELP(){ return `
   if loan_account_id collateral ratio is below self.min_collateral_basis_points
   predecesor_account_id can try to liquidate X amount
   in order to move collateral ratio back to self.collateral_basis_points
   
  
  usage:
  > usdnear liquidate { loan_account_id: String, max_usdnear_buy: U128String }
  `};
  
  liquidate(a /*:CommandLineArgs*/) /*:void*/{
    
    //--these are some examples on how to consume arguments
    //const toAccount = a.consumeString("to Account")
    //const argumentJson = a.consumeJSON("{ account:userAccount, amount:xxN }")
    
    //get fn arguments as JSON
    const fnJSONParams = a.consumeJSON("{ loan_account_id: String, max_usdnear_buy: U128String }")
    
    a.noMoreArgs() // no more positional args should remain
    
    this._call("liquidate",fnJSONParams)
    
  }
  
}
module.exports = ContractAPI;