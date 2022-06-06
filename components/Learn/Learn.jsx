import {ButtonToTop, LeftBox, Main, MainBox, PageName, RightBox, TextMain, TextP, TextSideBar} from "./learn.style";
import useTranslation from "next-translate/useTranslation";
import {Footer} from "../global.style";
import {useRouter} from "next/router";
import Link from "next/link";

const Learn = () => {
    const {t} = useTranslation("learn");
    const router = useRouter();
    const {learn_page} = router.query;

    const mainContent = [];
    const sideBar = [];

    if (learn_page !== "favicon.ico") {
        let content = t(`content.${learn_page}`, {count: 0}, {returnObjects: true});
        let key = 0;
        let key2 = 0;
        for (const name of content?.parts) {
            mainContent.push(
                <TextMain key={key} id={name.replace(/\s/g,"")}>{name.toUpperCase()}</TextMain>
            );
            sideBar.push(
                <li>
                    <Link href={`/learn/${learn_page}#${name.replace(/\s/g,"")}`} passHref>
                        <TextSideBar key={key}>{name}</TextSideBar>
                    </Link>
                </li>
            );
            for (const data of content?.sections[key2]) {
                mainContent.push(
                    <TextP key={key}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data}</TextP>
                )
                key++;
            }
            key2++;
        }
    }

    return (
        <>
            <Main>
                <LeftBox>
                    <p>Tematy</p>
                    <ul>
                        <li><Link href={"/learn/war"}>{t("war")}</Link></li>
                        <li><Link href={"/learn/buildings"}>{t("important-buildings")}</Link></li>
                        <li><Link href={"/learn/westerplatte"}>{t("westerplatte-terrains")}</Link></li>
                    </ul>
                </LeftBox>
                <MainBox>
                    <PageName>{t(`content.${learn_page}.name`)}</PageName>
                    {mainContent}
                    <Link href={`/learn/${learn_page}`} passHref><ButtonToTop>Powrót do góry</ButtonToTop></Link>
                </MainBox>
                <RightBox>
                    <p>Sekcje</p>
                    <ul>
                        {sideBar}
                    </ul>
                </RightBox>
            </Main>
            <Footer>{t("common:project")}</Footer>
        </>
    );
}

export default Learn;