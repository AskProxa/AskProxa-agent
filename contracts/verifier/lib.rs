use anchor_lang::prelude::*;

declare_id!("PRXA22222222222222222222222222222222222");

#[program]
pub mod verifier {
    use super::*;

    pub fn verify_receipt(
        _ctx: Context<VerifyReceipt>,
        hash: String,
    ) -> Result<()> {
        msg!("Verified {}", hash);
        Ok(())
    }
}

#[derive(Accounts)]
pub struct VerifyReceipt<'info> {
    #[account(mut)]
    pub signer: Signer<'info>,
}
