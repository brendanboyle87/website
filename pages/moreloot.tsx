import { ReactElement } from "react";
import Layout from "@components/Layout"; // Layout wrapper
import styles from "@styles/pages/FAQ.module.scss"; // Page styles

// FAQ page
export default function FAQ(): ReactElement {
  return (
    <Layout>
      <div className={styles.faq}>
        <h2>More Loot</h2>

        {/* What is loot ? */}
        <div className={styles.faq__item}>
          <h3>What is More Loot?</h3>
          <p>
            More Loot (or &quot;MLoot&quot;) is loot that can be minted using
            this{" "}
            <a href="https://etherscan.io/token/0x1dfe7Ca09e99d10835Bf73044a23B73Fc20623DF">
              contract
            </a>
            .
          </p>
          <p>
            Unlike original Loot which has a fixed supply of 8000 loot bags,
            More Loot has a dynamic supply. Currenty, there are approximately
            1,316,005 More Loot bags and the supply will continuously increase
            at 1/10 of the Ethereum block rate (abut 250,000 bags a year).
          </p>
          <h3>How do I get More Loot?</h3>
          <p>
            Enter an id into the claim function of the contract above and
            execute a transaction. More Loot is free aside from the gas fee. If
            the suggested gas fee is extremely high that More Loot bag has
            already been minted.
          </p>
          <h3>Where can I find out more about More Loot bags?</h3>
          <p>
            https://mloot.art/#/ lets you search for More Loot bags by bag id or
            item
          </p>
          <p>
            https://github.com/Kolo9/True-Rarity provies a python script that
            provides an interpretation of how rare items are across More Loot.
          </p>
        </div>
      </div>
    </Layout>
  );
}
