import React from "react";
import { render } from "@testing-library/react";
import style from "./Components/style";
import { Container, Row, Col } from "react-grid-system";

//Request class imports
import GeneraleInformation from "./Components/GeneraleInformation";
//import LanguageInformation from "./Components/Language";
import Ex from "./Components/Language";
import LanguageInformation from "./Components/Language";
class Application extends React.Component {
  render() {
    return (

      <div>
        {/*----------------------------------------------Entête---------------------------------------------------------------------------*/}
        <Container style={{ border: "solid", marginBottom: 10 }}>

          {/*----------------------------------------------Les informations générales--------------------------------------------------------*/}

          <Row style={style.Row.Normal}>
            <Col sm={2} style={style.Column}>
              <GeneraleInformation.GetLogin /> <br />
              <GeneraleInformation.GetName /> <br />
              <GeneraleInformation.GetBio />
              <Row style={style.Row.Normal}>
                <Col style={{ border: 'solid', borderRadius: 60, paddingBlock: 15 }}>
                  <img src={<GeneraleInformation.GetAvatar />} alt="Logo" />
                </Col>
              </Row>
            </Col>
            <Col sm={2} style={style.Column}>
              <Row style={style.Label}>Commits</Row>
              <Row style={style.Row.Contain}>
                <GeneraleInformation.GetTotalOfCommit />
              </Row>
            </Col>
            <Col sm={2} style={style.Column}>
              <Row style={style.Label}>Repos</Row>
              <Row style={style.Row.Contain}>
                <GeneraleInformation.GetTotalOfRepository />
              </Row>
            </Col>
            <Col sm={2} style={style.Column}>
              <Row style={style.Label}>Lines of code (Le nombre total de ligne de code)</Row>
              <Row style={style.Row.Contain}>
                "Values"
              </Row>
            </Col>
            <Col sm={2} style={style.Column}>
              <Row style={style.Label}>Followers</Row>
              <Row style={style.Row.Contain}>
                <GeneraleInformation.GetFollowers />
              </Row>
            </Col>
            <Col sm={2} style={style.Column}>
              <Row style={style.Label}>Following</Row>
              <Row style={style.Row.Contain}>
                <GeneraleInformation.GetFollowing />
              </Row>
            </Col>
          </Row>


          <Row style={style.Row.Normal}>

            {/*----------------------------------------------Overview--------------------------------------------------------------------------*/}
            <Col sm={12} style={{ border: 'solid' }}>
              <Row style={style.Row.Normal}>
                <Col style={style.Column}>
                  <h2>Overview</h2>
                  Diagrame décrivant la proportion d'utilisation des langages durant une période données
                </Col>
                <Col style={style.Column}>
                  Nombre de repos
                  Last updated
                </Col>
              </Row>
              <Row style={style.Row.Normal}>
                <Col style={style.Row.Contain}>
                  <LanguageInformation.GetList.Language0 />
                </Col>
                <Col style={style.Row.Contain}>
                  <LanguageInformation.GetList.Language1 />
                </Col>
                <Col style={style.Row.Contain}>
                  <LanguageInformation.GetList.Language2 />
                </Col>
                <Col style={style.Row.Contain}>
                  <LanguageInformation.GetList.Language3 />
                </Col>
              </Row>
            </Col>

            {/*----------------------------------------------Langages--------------------------------------------------------------------------*/}
            <Col sm={12} style={{ border: 'solid' }}>
              <Row style={style.Row.Normal}>
                <Col style={style.Column}>
                  <h2>Languages</h2>
                  Nom des langage + Commit par langage + Loc (voir ce que ça signifie) par langage
                  <Row>
                    <Col style={style.Row.Contain}>
                      Langage 1
                      <Row style={{ backgroundColor: "lightgreen" }}>Nombre de commit </Row>
                      Nombre de Loc
                    </Col>
                    <Col style={style.Row.Contain}></Col>
                  </Row>
                </Col>
                <Col style={style.Column}>
                  Fromage représentant la part d'activité par langage
                </Col>
              </Row>
            </Col>

            {/*----------------------------------------------Repository------------------------------------------------------------------------*/}
            <Col sm={12} style={{ border: 'solid' }}>
              <Row style={style.Row.Normal}>
                <Col style={style.Column}> <h2> Repositories</h2> </Col>
                <Col style={style.Column}> compte des repositories + lastUpdate (date + heure)</Col>
              </Row>
              <Row style={style.Row.Normal}>
                Tableau (Liste des repositories)
              </Row>
            </Col>

          </Row>

        </Container>
      </div>
    );
  }
}
render(
  <Application />,
  document.getElementById('root'),
);

