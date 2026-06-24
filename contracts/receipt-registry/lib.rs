use anchor_lang::prelude::*;

declare_id!("PRXA11111111111111111111111111111111111");

#[program]
pub mod receipt_registry {
    use super::*;

    pub fn create_receipt(
        _ctx: Context<CreateReceipt>,
        hash: String,
    ) -> Result<()> {
        msg!("Receipt {}", hash);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct CreateReceipt<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
