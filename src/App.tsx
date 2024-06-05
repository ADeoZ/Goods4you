import styled from "styled-components";
import CartSvg from "@assets/svg/cart.svg?url";
import MinusSvg from "@assets/svg/minus.svg?url";
import PlusSvg from "@assets/svg/plus.svg?url";
import CrossSvg from "@assets/svg/cross.svg?url";

// разбить на компоненты
// сделать ссылки
// проверить на переполняемость текстов

const StyledButton = styled.button`
  width: 100%;
  max-width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text.light};
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.buttons.hover};
  }

  &:active {
    font-size: 1.5rem;
  }
`;

const StyledPrimaryButton = styled(StyledButton)`
  height: 67px;
  padding: 2.2rem 4.65rem;
`;

const StyledHeader = styled.header`
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
  background-color: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: 600px) {
    height: auto;
    padding: 20px;
  }
`;

const StyledHeaderWrapper = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 5px 0;
  border-bottom: solid 1px rgb(255, 255, 255, 0.5);

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const StyledLogo = styled.a`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.light};

  &:hover {
    color: ${({ theme }) => theme.colors.text.light};
  }
`;

const StyledMenu = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 3.35rem;
`;

const StyledMenuLink = styled.a`
  display: flex;
  font-size: 1.4rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.light};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.text.grayDark};
    text-decoration: underline;
  }

  &:active {
    color: ${({ theme }) => theme.colors.text.grayLight};
  }
`;

const StyledCart = styled.div`
  display: inline-block;
  position: relative;
  width: 20px;
  height: 20px;
  margin: -2px 5px 0 6px;
  background-image: url("${CartSvg}");
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledCartValue = styled.span`
  width: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  bottom: -25%;
  right: -17%;
  background-color: ${({ theme }) => theme.colors.buttons.primary};
  font-size: 0.8rem;
`;

const StyledIntro = styled.section`
  width: 100%;
  max-width: ${({ theme }) => theme.width.max};
  position: relative;
  padding: 101px 0 93px;

  @media (max-width: 600px) {
    padding: 50px 0 30px;
  }
`;

const StyledIntroLogo = styled.div`
  padding: 34px 29px 0 0;
  position: absolute;
  left: 0;
  right: 0;
  text-align: center;
  font-size: clamp(1rem, -5rem + 20vw, 20rem);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.light};
  opacity: 12%;

  @media (max-width: 600px) {
    display: none;
  }
`;

const StyledIntroContent = styled.div`
  max-width: 580px;
  position: relative;
  color: ${({ theme }) => theme.colors.text.light};
`;

const StyledIntroContentTitle = styled.p`
  margin-bottom: 19px;
  font-size: 3.6rem;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 3rem;
  }
`;

const StyledIntroContentDescription = styled.p`
  margin-bottom: 38px;
  max-width: 330px;
  font-size: 1.6rem;
  font-weight: 600;
  line-height: 1.4;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const StyledMain = styled.main`
  flex-grow: 1;
  padding: 0 20px;
`;

const StyledMainWrapper = styled.div`
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;
  padding: 54px 0 60px;
`;

const StyledMainHeader = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.dark};
`;

const StyledSearchBar = styled.section`
  display: flex;
  gap: 20px;
  margin-top: 43px;
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
`;

const StyledSearchInput = styled.input.attrs({ type: "search" })`
  width: 100%;
  height: 67px;
  padding: 2.1rem 1.6rem;
  background-color: ${({ theme }) => theme.colors.inputs.bg};
  border-width: 0;
  font-size: 1.6rem;

  &::placeholder {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text.grayLight};
  }

  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    display: none;
  }

  &:hover {
    outline: solid 1px ${({ theme }) => theme.colors.inputs.hover};
  }

  &:focus {
    outline: solid 2px #000;
  }
`;

const StyledCatalog = styled.section`
  padding: 40px 0 0;
`;

const StyledCatalogList = styled.ul`
  display: grid;
  grid-template-columns: repeat(auto-fill, 370px);
  justify-content: center;
  gap: 40px 35px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    max-width: 370px;
    margin: 0 auto;
  }
`;

const StyledCatalogItem = styled.li`
  display: flex;
  flex-direction: column;
`;

const StyledItemContent = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 10px;
`;

const StyledItemContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.text.dark};
  overflow: hidden;
`;

const StyledItemTitle = styled.a`
  font-size: 1.6rem;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text.dark};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 600px) {
    white-space: normal;
    overflow: auto;
  }
`;

const StyledItemPrice = styled.div`
  font-size: 1.8rem;
  font-weight: 400;
  line-height: 1.4;
`;

const StyledItemControllers = styled.div`
  display: flex;
`;

const StyledItemButton = styled(StyledButton)`
  width: 48px;
  height: 48px;

  background-repeat: no-repeat;
  background-position: center;
`;

const StyledItemBuyButton = styled(StyledItemButton)`
  background-image: url("${CartSvg}");
  background-size: 24px;
`;

const StyledItemMinusButton = styled(StyledItemButton)`
  background-image: url("${MinusSvg}");
`;

const StyledItemPlusButton = styled(StyledItemButton)`
  background-image: url("${PlusSvg}");
`;

const StyledItemValue = styled.div`
  display: flex;
  justify-content: center;
  width: 62px;
  height: 48px;
  padding: 15px 0;
  margin: 0 9px 0 8px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.inputs.bg};
  font-size: 1.4rem;
`;

const StyledItemImageWrapper = styled.a`
  display: block;
  height: 293px;
  overflow: auto;
  position: relative;

  &::after {
    content: "";
    display: block;
    border-radius: 4px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    background-color: rgb(135, 135, 135);
    opacity: 0;
    transition: opacity 0.5s;
  }

  &:hover::after {
    opacity: 25%;
  }

  &:hover + ${StyledItemContent} ${StyledItemTitle} {
    text-decoration: underline;
  }
`;

const StyledItemImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledCatalogShowMore = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 59px;
  padding-right: 59px;

  @media (max-width: 1000px) {
    padding: 0;
  }
`;

const StyledBottomContent = styled.aside`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 35px 0 123px 22px;
  background-color: ${({ theme }) => theme.colors.bg.primary};

  @media (max-width: 1000px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const StyledFaqSection = styled.section`
  max-width: 880px;
  margin: 0 auto;
  flex-grow: 1;
`;

const StyledFaqHeader = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.text.light};
`;

const StyledFaqList = styled.ul`
  margin-top: 26px;
  border-top: 1px solid #fff;
`;

const StyledFaqItem = styled.li`
  position: relative;
  padding: 30px 80px 4px 0;
  border-bottom: 1px solid #fff;
  color: ${({ theme }) => theme.colors.text.light};
`;

const StyledFaqItemControlButton = styled.button`
  width: 25px;
  height: 25px;
  position: absolute;
  top: 27px;
  right: 0;
  background-image: url("${CrossSvg}");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  will-change: transform;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.3) rotate(45deg);
  }
`;

const StyledFaqItemTitle = styled.h3`
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 16px;

  @media (max-width: 600px) {
    font-size: 1.6rem;
  }
`;

const StyledFaqItemAnswer = styled.p`
  font-size: 1.6rem;
  font-weight: 600;
  margin-bottom: 34px;

  @media (max-width: 600px) {
    font-size: 1.2rem;
  }
`;

const StyledFooter = styled.footer`
  padding: 18px 20px 19px;
  background-color: ${({ theme }) => theme.colors.bg.secondary};
`;

const StyledFooterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: ${({ theme }) => theme.width.max};
  margin: 0 auto;

  @media (max-width: 500px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const App = () => {
  return (
    <>
      <StyledHeader>
        <StyledHeaderWrapper>
          <StyledLogo href="/" aria-label="Link to Main page">
            Goods4you
          </StyledLogo>
          <nav>
            <StyledMenu>
              <li>
                <StyledMenuLink href="#Catalog">Catalog</StyledMenuLink>
              </li>
              <li>
                <StyledMenuLink href="#FAQ">FAQ</StyledMenuLink>
              </li>
              <li>
                <StyledMenuLink href="#" aria-label="1 item in Cart">
                  Cart
                  <StyledCart aria-hidden="true">
                    <StyledCartValue>1</StyledCartValue>
                  </StyledCart>
                </StyledMenuLink>
              </li>
            </StyledMenu>
          </nav>
        </StyledHeaderWrapper>
        <StyledIntro>
          <StyledIntroLogo>Goods4you</StyledIntroLogo>
          <StyledIntroContent>
            <StyledIntroContentTitle>
              Any products from famous brands with worldwide delivery
            </StyledIntroContentTitle>
            <StyledIntroContentDescription>
              We sell smartphones, laptops, clothes, shoes and many other products at low prices
            </StyledIntroContentDescription>
            <StyledPrimaryButton>Go to shopping</StyledPrimaryButton>
          </StyledIntroContent>
        </StyledIntro>
      </StyledHeader>
      <StyledMain>
        <StyledMainWrapper>
          <StyledMainHeader id="Catalog">Catalog</StyledMainHeader>
          <StyledSearchBar>
            <StyledSearchInput placeholder="Search by title" aria-label="Search in catalog by title" />
            <StyledPrimaryButton>Search</StyledPrimaryButton>
          </StyledSearchBar>
          <StyledCatalog>
            <StyledCatalogList>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton aria-label="Add to Cart" />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>

              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemMinusButton aria-label="Remove one item from Cart" />
                    <StyledItemValue aria-valuenow={1}>1</StyledItemValue>
                    <StyledItemPlusButton aria-label="Add one item to Cart" />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
              <StyledCatalogItem>
                <StyledItemImageWrapper href="#">
                  <StyledItemImage
                    src="./images/sneak1.png"
                    alt="Image of Essence Mascara Lash Princess, pink"
                  />
                </StyledItemImageWrapper>
                <StyledItemContent>
                  <StyledItemContentWrapper>
                    <StyledItemTitle href="#">Essence Mascara Lash Princess</StyledItemTitle>
                    <StyledItemPrice>110 $</StyledItemPrice>
                  </StyledItemContentWrapper>
                  <StyledItemControllers>
                    <StyledItemBuyButton />
                  </StyledItemControllers>
                </StyledItemContent>
              </StyledCatalogItem>
            </StyledCatalogList>
            <StyledCatalogShowMore>
              <StyledPrimaryButton>Show more</StyledPrimaryButton>
            </StyledCatalogShowMore>
          </StyledCatalog>
        </StyledMainWrapper>
      </StyledMain>
      <StyledBottomContent>
        <StyledFaqSection>
          <StyledFaqHeader id="FAQ">FAQ</StyledFaqHeader>
          <StyledFaqList>
            <StyledFaqItem>
              <StyledFaqItemControlButton
                aria-label="Question 1"
                aria-expanded="true"
                aria-controls="Question 1"
              />
              <StyledFaqItemTitle id="Question 1">Question 1</StyledFaqItemTitle>
              <StyledFaqItemAnswer>Long answer to the first question</StyledFaqItemAnswer>
            </StyledFaqItem>
            <StyledFaqItem>
              <StyledFaqItemControlButton
                aria-label="Question 2"
                aria-expanded="false"
                aria-controls="Question 2"
              />
              <StyledFaqItemTitle>Question 2</StyledFaqItemTitle>
            </StyledFaqItem>
          </StyledFaqList>
        </StyledFaqSection>
      </StyledBottomContent>
      <StyledFooter>
        <StyledFooterWrapper>
          <StyledLogo href="/" aria-label="Link to Main page">
            Goods4you
          </StyledLogo>
          <nav>
            <StyledMenu>
              <li>
                <StyledMenuLink href="#Catalog">Catalog</StyledMenuLink>
              </li>
              <li>
                <StyledMenuLink href="#FAQ">FAQ</StyledMenuLink>
              </li>
            </StyledMenu>
          </nav>
        </StyledFooterWrapper>
      </StyledFooter>
    </>
  );
};
