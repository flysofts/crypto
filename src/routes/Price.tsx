import React from "react";
import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinTickers } from "../api";
import styled from "styled-components";

const List = styled.ul``;

const Lists = styled.li`
  font-size: 20px;
`;

interface PriceProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price() {
  const { coinId } = useOutletContext<PriceProps>();
  const { isLoading, data } = useQuery<PriceData>(["tickers", coinId], () =>
    fetchCoinTickers(coinId ?? "")
  );
  return (
    <div>
      {isLoading ? (
        "loading price..."
      ) : (
        <List>
          <Lists>코인이름:{data?.name}</Lists>
          <Lists>가격:{data?.quotes.USD.ath_price.toFixed(0)}</Lists>
        </List>
      )}
    </div>
  );
}

export default Price;
